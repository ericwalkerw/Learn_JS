"use strict";

class App {
    constructor() {
        this.pets = [];
        this.tableBodyEl = document.getElementById("tbody");
        const submitBtn = document.getElementById("submit-btn");

        submitBtn.addEventListener("click", this.onClickSubmit.bind(this));
    }

    getValue() {
        const get = (value) => document.getElementById(value);
        return {
            id: get("input-id").value,
            name: get("input-name").value,
            age: get("input-age").value,
            weight: get("input-weight").value,
            length: get("input-length").value,

            //option
            type: get("input-type").value,
            breed: get("input-breed").value,
            color: get("input-color").value,

            //checked
            vaccinated: get("input-vaccinated").checked,
            dewormed: get("input-dewormed").checked,
            sterilized: get("input-sterilized").checked,

            date: new Date().toLocaleDateString("en-GB"),
        };
    }

    validDate(data) {
        const showAlert = (mes) => alert(mes);

        if (data.id.trim() === "") {
            showAlert("ID must be unique!");
            return false;
        }

        if (data.age.trim() === "" || data.age < 1 || data.age > 15) {
            showAlert("Age must be between 1 and 15!");
            return false;
        }

        if (data.weight.trim() === "" || data.weight < 1 || data.weight > 15) {
            showAlert("Weight must be between 1 and 15!");
            return false;
        }

        if (data.length.trim() === "" || data.length < 1 || data.length > 100) {
            showAlert("Length must be between 1 and 100!");
            return false;
        }

        if (data.type === "Select Type") {
            showAlert("Please select Type!");
            return false;
        }

        // if (data.breed === "Select Breed") {
        //     showAlert("Please select Breed!");
        //     return false;
        // }

        return true;
    }

    renderTable(pet) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${pet.id}</td>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.type}</td>
        <td>${pet.weight}</td>
        <td>${pet.length}</td>
        <td>${pet.breed}</td>
        <td><span ${this.color(pet.color)}></span></td>
        <td ${this.checked(pet.vaccinated)}></td>
        <td ${this.checked(pet.dewormed)}</td>
        <td ${this.checked(pet.sterilized)}</td>
        <td>${pet.date}</td>
        <td><button class="btn btn-danger" onClick="app.deletePet(${pet.id});">Delete</button></td>
    `;
        this.tableBodyEl.appendChild(row);
    }

    deletePet(id){
        let newPets = this.pets.filter(pet => pet.id !== id);
    }

    color(color) {
        const size = (value) => `width:${value}px;height:${value / 2}px`;
        return `style = "${size(50)}; background-color: ${color}"`;
    }

    checked(value) {
        if (value) {
            return `class="bi-check-circle-fill"`;
        } else {
            return `class="bi-x-circle-fill"`;
        }
    }

    onClickSubmit() {
        const newData = this.getValue();

        // if (!this.validDate(newData)) return;
        this.pets.push(newData);
        this.tableBodyEl.innerHTML = "";

        this.pets.forEach((pet) => {
            this.renderTable(pet);
        });
    }
}

const app = new App();
