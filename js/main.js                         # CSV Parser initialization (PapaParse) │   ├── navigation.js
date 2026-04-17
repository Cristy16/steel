// Global storage for the database
let shapesData = [];

/**
 * Initializes the CSV data. 
 * This should be called on the window.onload of any Analysis/Design page.
 */
export function initCSV(callback) {
    Papa.parse("../../data/aisc-shapes-database-v160-2.csv", {
        download: true,
        header: true,
        complete: function(results) {
            shapesData = results.data;
            populateTypeDropdown();
            if (callback) callback();
        }
    });
}

function populateTypeDropdown() {
    const typeSelect = document.getElementById('shapeType');
    if (!typeSelect) return;
    
    const types = [...new Set(shapesData.map(item => item.Type))].filter(t => t);
    types.forEach(t => typeSelect.options.add(new Option(t, t)));
}

// Global functions attached to window so HTML 'onchange' can see them
window.filterFamilies = function() {
    const selectedType = document.getElementById('shapeType').value;
    const familySelect = document.getElementById('familyHead');
    familySelect.innerHTML = '<option value="">Depth/Family</option>';
    
    const families = [...new Set(shapesData
        .filter(s => s.Type === selectedType)
        .map(s => s.AISC_Manual_Label.split('X')[0]))];
    
    families.forEach(f => familySelect.options.add(new Option(f, f)));
};

window.filterMembers = function() {
    const selectedType = document.getElementById('shapeType').value;
    const selectedFamily = document.getElementById('familyHead').value;
    const memberSelect = document.getElementById('memberName');
    memberSelect.innerHTML = '<option value="">Select Member</option>';
    
    const members = shapesData.filter(s => 
        s.Type === selectedType && s.AISC_Manual_Label.startsWith(selectedFamily)
    );
    
    members.forEach(m => memberSelect.options.add(new Option(m.AISC_Manual_Label, m.AISC_Manual_Label)));
};

/**
 * Returns the full data object for the currently selected member
 */
window.getSelectedShape = function() {
    const label = document.getElementById('memberName').value;
    const shape = shapesData.find(s => s.AISC_Manual_Label === label);
    if(shape && document.getElementById('shapeSpecs')) {
        document.getElementById('shapeSpecs').innerHTML = 
            `<small>Area (A): ${shape.A} in² | d: ${shape.d} in | tw: ${shape.tw} in</small>`;
    }
    return shape;
};