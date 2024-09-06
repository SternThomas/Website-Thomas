// script.js

document.addEventListener('DOMContentLoaded', function() {
    const selectedCheckboxes = [];

    // Function to determine category based on selected checkboxes and toggle corresponding elements
    function determineCategoryAndToggle(selectedCheckboxes) {
        // Patterns for each category and corresponding IDs to unhide
        const categories = {
            "Chronograph": {
                patterns: [
                    ["1_1", "2_1", "3_1", "4_1"],
                    ["1_1", "2_1", "3_2", "4_1"],
                    ["1_1", "2_1", "3_2", "4_3"],
                    ["1_1", "2_1", "3_2", "4_4"],
                    ["1_1", "2_2", "3_1", "4_2"],
                    ["1_1", "2_2", "3_2", "4_1"],
                    ["1_1", "2_2", "3_2", "4_2"],
                    ["1_1", "2_2", "3_2", "4_3"],
                    ["1_1", "2_2", "3_2", "4_4"],
                    ["1_1", "2_3", "3_1", "4_2"],
                    ["1_1", "2_3", "3_2", "4_1"],
                    ["1_1", "2_3", "3_2", "4_2"],
                    ["1_1", "2_3", "3_2", "4_3"],
                    ["1_1", "2_3", "3_2", "4_4"],
                    ["1_2", "2_1", "3_1", "4_2"],
                    ["1_2", "2_1", "3_2", "4_1"],
                    ["1_2", "2_1", "3_2", "4_3"],
                    ["1_2", "2_2", "3_1", "4_2"],
                    ["1_2", "2_2", "3_2", "4_1"],
                    ["1_2", "2_2", "3_2", "4_3"],
                    ["1_2", "2_3", "3_1", "4_2"],
                    ["1_2", "2_3", "3_2", "4_1"],
                    ["1_2", "2_3", "3_2", "4_3"],
                    ["1_3", "2_1", "3_1", "4_2"],
                    ["1_3", "2_1", "3_1", "4_3"],
                    ["1_3", "2_1", "3_1", "4_4"],
                    ["1_3", "2_1", "3_2", "4_1"],
                    ["1_3", "2_1", "3_2", "4_2"],
                    ["1_3", "2_1", "3_2", "4_3"],
                    ["1_3", "2_2", "3_1", "4_2"],
                    ["1_3", "2_2", "3_2", "4_2"],
                    ["1_3", "2_2", "3_2", "4_3"],
                    ["1_3", "2_3", "3_1", "4_2"],
                    ["1_3", "2_3", "3_2", "4_3"],
                    ["1_3", "2_3", "3_2", "4_4"]
                ],
                idsToToggle: ["Chronograph1", "Chronograph2", "Chronograph3", "Chronograph4"]
            },
            "Dresswatch": {
                patterns: [
                    ["1_1", "2_1", "3_1", "4_2"],
                    ["1_1", "2_1", "3_2", "4_2"],
                    ["1_1", "2_2", "3_1", "4_1"],
                    ["1_1", "2_2", "3_1", "4_3"],
                    ["1_1", "2_3", "3_1", "4_1"],
                    ["1_1", "2_3", "3_1", "4_3"],
                    ["1_2", "2_1", "3_1", "4_1"],
                    ["1_2", "2_1", "3_2", "4_2"],
                    ["1_2", "2_2", "3_1", "4_1"],
                    ["1_2", "2_2", "3_1", "4_3"],
                    ["1_2", "2_2", "3_2", "4_2"],
                    ["1_2", "2_3", "3_1", "4_1"],
                    ["1_2", "2_3", "3_1", "4_3"],
                    ["1_2", "2_3", "3_2", "4_2"],
                    ["1_3", "2_1", "3_1", "4_1"],
                    ["1_3", "2_2", "3_1", "4_1"],
                    ["1_3", "2_2", "3_1", "4_3"],
                    ["1_3", "2_3", "3_1", "4_1"],
                    ["1_3", "2_3", "3_1", "4_3"],
                    ["1_2", "2_1", "3_1", "4_3"],
                    ["1_2", "2_1", "3_1", "4_4"]
                ],
                idsToToggle: ["Dresswatch1", "Dresswatch2", "Dresswatch3", "Dresswatch4"]
            },
            "GMT Uhr": {
                patterns: [
                    ["1_1", "2_2", "3_1", "4_4"],
                    ["1_1", "2_3", "3_1", "4_4"],
                    ["1_2", "2_1", "3_2", "4_4"],
                    ["1_2", "2_2", "3_1", "4_4"],
                    ["1_2", "2_2", "3_2", "4_4"],
                    ["1_2", "2_3", "3_1", "4_4"],
                    ["1_2", "2_3", "3_2", "4_4"],
                    ["1_3", "2_1", "3_2", "4_4"],
                    ["1_3", "2_2", "3_1", "4_4"],
                    ["1_3", "2_2", "3_2", "4_4"],
                    ["1_3", "2_3", "3_1", "4_4"],
                    ["1_3", "2_3", "3_2", "4_2"]
                ],
                idsToToggle: ["GMT_Uhr1", "GMT_Uhr2", "GMT_Uhr3", "GMT_Uhr4"]
            },
            "Taucher": {
                patterns: [
                    ["1_3", "2_2", "3_2", "4_1"],
                    ["1_3", "2_3", "3_2", "4_1"],
                    ["1_1", "2_1", "3_1", "4_3"],
                    ["1_1", "2_1", "3_1", "4_4"]
                ],
                idsToToggle: ["Taucher1", "Taucher2", "Taucher3", "Taucher4"]
            }
        };
        

        // Function to hide all elements for a specific category
        function hideCategoryElements(category) {
            if (categories[category]) {
                categories[category].idsToToggle.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.style.display = 'none'; // Hide elements
                    }
                });
            }
        }

        // Hide all elements initially
        Object.keys(categories).forEach(category => {
            hideCategoryElements(category);
        });

        // Check each category pattern against the selected checkboxes
        for (const [categoryName, { patterns, idsToToggle }] of Object.entries(categories)) {
            for (const pattern of patterns) {
                if (pattern.every(cb => selectedCheckboxes.includes(cb))) {
                    // Unhide corresponding elements
                    idsToToggle.forEach(id => {
                        const element = document.getElementById(id);
                        if (element) {
                            element.style.display = 'block';
                        }
                    });
                    return categoryName;
                }
            }
        }

        return "Category not found";
    }

    function updateCategory() {
        const category = determineCategoryAndToggle(selectedCheckboxes);
        console.log("Category:", category);
    }

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkboxId = this.id;
            if (this.checked) {
                // Add ID to selectedCheckboxes if not already present
                if (!selectedCheckboxes.includes(checkboxId)) {
                    selectedCheckboxes.push(checkboxId);
                }
            } else {
                // Remove ID from selectedCheckboxes if unchecked
                const index = selectedCheckboxes.indexOf(checkboxId);
                if (index > -1) {
                    selectedCheckboxes.splice(index, 1);
                }
            }
            updateCategory();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const selectedCheckboxes = [];

    function updateCategory() {
        const category = determineCategoryAndToggle(selectedCheckboxes);
        console.log("Category:", category);
    }

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkboxId = this.id;
            if (this.checked) {
                if (selectedCheckboxes.length >= 4) {
                    this.checked = false; // Uncheck the checkbox
                    alert("Bitte Wähle nur eine Antwort pro Frage.");
                } else {
                    // Add ID to selectedCheckboxes if not already present
                    if (!selectedCheckboxes.includes(checkboxId)) {
                        selectedCheckboxes.push(checkboxId);
                    }
                }
            } else {
                // Remove ID from selectedCheckboxes if unchecked
                const index = selectedCheckboxes.indexOf(checkboxId);
                if (index > -1) {
                    selectedCheckboxes.splice(index, 1);
                }
            }
            updateCategory();
        });
    });
});
