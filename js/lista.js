body, html {
    height: 100%;
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 100%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

header {
    font-size: 2em;
    color: #000;
    margin-bottom: 20px;
}

.task-input-container {
    display: flex;
    justify-content: space-between;
}

#new-task-input, #add-task-btn, .filter-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    margin: 5px;
    transition: all 0.3s ease;
}

#new-task-input {
    flex-grow: 1;
    margin-right: 5px;
}

#add-task-btn {
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.filters {
    text-align: center;
    margin-top: 20px;
}

.filter-btn {
    background: none;
    color: #333;
    font-size: 0.9em;
    cursor: pointer;
}

.filter-btn.active {
    color: #4caf50;
    font-weight: bold;
}

#task-list li {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px 20px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

#task-list li:hover {
    transform: scale(1.02);
}

.completed {
    text-decoration: line-through;
    color: #999;
    background-color: #e0e0e0;
}

@media (max-width: 600px) {
    #new-task-input, #add-task-btn, .filter-btn {
        width: 100%;
    }
}
