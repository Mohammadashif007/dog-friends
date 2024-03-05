const dogs = [
    { id: 1, category: "anik", image: "./images/an1.jfif", name: "Anik" },
    // { id: 2, category: "shanto", image: "./images/an2.jfif", name: "Shanto" },
    { id: 3, category: "anik", image: "./images/an3.jfif", name: "Anik" },
    { id: 4, category: "anik", image: "./images/an4.jfif", name: "Anik" },
    { id: 5, category: "anik", image: "./images/an5.jfif", name: "Anik" },
    { id: 6, category: "anik", image: "./images/an6.jfif", name: "Anik" },
    { id: 7, category: "anik", image: "./images/an7.jfif", name: "Anik" },
    { id: 8, category: "fahim", image: "./images/fa1.jfif", name: "Fahim" },
    { id: 9, category: "fahim", image: "./images/fa2.jfif", name: "Fahim" },
    { id: 10, category: "fahim", image: "./images/fa3.jfif", name: "Fahim" },
    { id: 11, category: "fahim", image: "./images/fa4.jfif", name: "Fahim" },
    { id: 12, category: "fahim", image: "./images/fa5.jfif", name: "Fahim" },
    { id: 13, category: "ashif", image: "./images/as1.jfif", name: "Ashif" },
    { id: 14, category: "ashif", image: "./images/as2.jfif", name: "Ashif" },
    { id: 15, category: "ashif", image: "./images/as3.jfif", name: "Ashif" },
    { id: 16, category: "ashif", image: "./images/as4.jfif", name: "Ashif" },
    { id: 17, category: "ashif", image: "./images/as5.jfif", name: "Ashif" },
    { id: 18, category: "ashif", image: "./images/as6.jfif", name: "Ashif" },
    { id: 18, category: "ashif", image: "./images/as7.jfif", name: "Ashif" },
    { id: 18, category: "ashif", image: "./images/as8.jfif", name: "Ashif" },
    { id: 20, category: "shanto", image: "./images/s2.jfif", name: "Shanto" },
    { id: 21, category: "shanto", image: "./images/s3.jfif", name: "Shanto" },
    { id: 22, category: "shanto", image: "./images/s4.jfif", name: "Shanto" },
    { id: 23, category: "shanto", image: "./images/s5.jfif", name: "Shanto" },
    { id: 24, category: "shanto", image: "./images/s6.jfif", name: "Shanto" },
];

const dogContainer = document.getElementById("dog-container");
const generateDog = (name) => {
    loadingSpinner(false);
    dogContainer.innerHTML = "";

    return (dogContainer.innerHTML = name
        .map((x) => {
            const { image } = x;
            return `
        <div class="rounded-2xl p-1">
            <img class="w-full rounded" src=${image} alt="" />
            <p class="text-2xl font-bold text-center"></p>
        </div>
        `;
        })
        .join(""));
};

const searchByCategory = () => {
    loadingSpinner(true);
    const category = document.getElementById("textInput");
    const searchText = category.value.toLowerCase();
    const categoryData = dogs.filter((x) => x.category === searchText);
    setTimeout(() => {
        generateDog(categoryData);
    }, 1000);
    category.value = "";
};

const loadingSpinner = (isLoading) => {
    const spinner = document.getElementById("spinner");
    const dogContainer = document.getElementById("dog-container");
    if (isLoading) {
        spinner.classList.remove("hidden");
        dogContainer.classList.add("hidden")
    } else {
        spinner.classList.add("hidden");
        dogContainer.classList.remove("hidden")
    }
};
