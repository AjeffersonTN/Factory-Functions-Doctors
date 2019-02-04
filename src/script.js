/*
Lightning Exercise 1:
Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice
*/

                    //DOCTORS
// document.querySelector("#saveButton").addEventListener("click",
//     event => {
//         const userName = document.querySelector("#name").value
//         const userAddress = document.querySelector("#address").value
//         const userSpecialty = document.querySelector("#specialty").value
//         console.log(userAddress)
//         createDoctor(userName, userAddress, userSpecialty)
//     })

const createDoctor = (name, address, specialty) => ({
    "doctorsName": name,
    "specialty": specialty,
    "address": address
})

    //PETS
let bowWowKennels = []
const createPet = (petName, petBreed) => ({
    "pet name": petName,
    "pet breed": petBreed
})

bowWowKennels.push(createPet("Becca", "Bully"))
bowWowKennels.push(createPet("Pac", "PitBull"))
bowWowKennels.push(createPet("Rocky", "Bully"))
console.log(bowWowKennels)