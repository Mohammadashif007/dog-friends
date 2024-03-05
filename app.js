const dogs = [
    { id: 1, category: "anik", image: "./images/anik1.jpg", name: "Anik" },
    { id: 2, category: "shanto", image: "./images/anik2.jpg", name: "Shanto" },
    { id: 3, category: "anik", image: "./images/anik3.jfif", name: "Anik" },
    { id: 4, category: "anik", image: "./images/anik4.jpg", name: "Anik" },
    { id: 5, category: "anik", image: "./images/anik5.jpg", name: "Anik" },
    { id: 6, category: "anik", image: "./images/anik6.jpg", name: "Anik" },
    { id: 7, category: "anik", image: "./images/anik5.webp", name: "Anik" },
    { id: 8, category: "fahim", image: "./images/f1.jpg", name: "Fahim" },
    { id: 9, category: "fahim", image: "./images/f2.webp", name: "Fahim" },
    { id: 10, category: "fahim", image: "./images/f3.jpg", name: "Fahim" },
    { id: 11, category: "fahim", image: "./images/f4.jpg", name: "Fahim" },
    { id: 12, category: "fahim", image: "./images/f5.png", name: "Fahim" },
    { id: 13, category: "ashif", image: "./images/a1.jfif", name: "Ashif" },
    { id: 14, category: "ashif", image: "./images/a2.jpg", name: "Ashif" },
    { id: 15, category: "ashif", image: "./images/a3.webp", name: "Ashif" },
    { id: 16, category: "ashif", image: "./images/a4.jfif", name: "Ashif" },
    { id: 17, category: "ashif", image: "./images/a5.jfif", name: "Ashif" },
    { id: 18, category: "ashif", image: "./images/a6.jpg", name: "Ashif" },
    { id: 19, category: "shanto", image: "./images/s1.png", name: "Shanto" },
    { id: 20, category: "shanto", image: "./images/s2.webp", name: "Shanto" },
    { id: 21, category: "shanto", image: "./images/s3.jpg", name: "Shanto" },
    { id: 22, category: "shanto", image: "./images/s4.webp", name: "Shanto" },
    // { id: 23, category: "shanto", image: "./images/s3.jpg", name: "Shanto" },
];

const dogContainer = document.getElementById("dog-container");
const generateDog = (name) => {
    dogContainer.innerHTML = "";
    return (dogContainer.innerHTML = name
        .map((x) => {
            const { image, name } = x;
            return `
        <div class="border-2 w-[300px] rounded-2xl p-1">
            <img class="w-[300px] h-[300px]" src=${image} alt="" />
            <p class="text-2xl font-bold text-center">${name}</p>
        </div>
        `;
        })
        .join(""));
};

const searchByCategory = () => {
    const category = document.getElementById("textInput");
    const searchText = (category.value).toLowerCase();
    const categoryData = dogs.filter((x) => x.category === searchText);
    generateDog(categoryData);
    category.value = "";
};
