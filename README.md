# Form Designer

## Overview
Form Designer is a web-based application that allows users to dynamically create, modify, and reorder form elements using a simple drag-and-drop interface. Users can add inputs, select fields, text areas, and checkboxes, and save the designed form structure as JSON.

## Features
- **Dynamic Form Creation**: Add various form elements (input, select, textarea, checkbox).
- **Drag-and-Drop Reordering**: Easily rearrange form components by dragging them.
- **Deletion**: Remove unwanted components from the form.
- **Save Form Structure**: Log the current form as JSON in the console for further use.
- **Local Storage Support**: Form structure is saved in local storage.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript (ES6+)**

## Getting Started
### 1. Clone the Repository
```sh
https://github.com/rambedade/sunbase-assignment1.git
cd sunbase-assignment1
```

### 2. Open Locally
Simply open `index.html` in your browser to run the app.

## Usage
1. Click the buttons under "Components" to add elements to the form.
2. Drag and drop elements to reorder them.
3. Click "Delete" to remove a form element.
4. Click "Save" to log the current form structure as JSON in the console.

## Example JSON Output
```json
[
  {
    "id": "c0ac49c5-871e-4c72-a878-251de465e6b4",
    "type": "input",
    "label": "Sample Input",
    "placeholder": "Sample placeholder"
  },
  {
    "id": "146e69c2-1630-4a27-9d0b-f09e463a66e4",
    "type": "select",
    "label": "Sample Select",
    "options": ["Sample Option 1", "Sample Option 2"]
  }
]
```

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests.

## License
This project is licensed under the MIT License.

