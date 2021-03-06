const data = [
    {
      img: "baghi.jpg",
      alt: "dog-baghi",
      name: "Baghi",
      info: [
        "Raza pequeña",
        "3 meses",
        "Hembra",
        "Convive con niños y otros perros"
      ],
      size: "S",
      age: 3,
      gender: "F",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "bandit.jpg",
      alt: "dog-bandit",
      name: "Bandit",
      info: [
        "Raza pequeña",
        "15 meses",
        "Hembra",
        "No convive con gatos"
      ],
      size: "S",
      age: 15,
      gender: "F",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "N"
    },
    {
      img: "chip.jpg",
      alt: "dog-chip",
      name: "Chip",
      info: [
        "Raza pequeña",
        "2 años",
        "Macho",
        "Convive con otros perros"
      ],
      size: "S",
      age: 24,
      gender: "M",
      kidFriendly: "N",
      dogFriendly: "Y",
      catFriendly: "N"
    },
    {
      img: "kato.jpg",
      alt: "dog-kato",
      name: "Kato",
      info: [
        "Raza pequeña",
        "18 meses",
        "Macho",
        "Convive con niños y otras mascotas"
      ],
      size: "S",
      age: 18,
      gender: "M",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "kiara.jpg",
      alt: "dog-kiara",
      name: "Kiara",
      info: [
        "Raza pequeña",
        "3 años",
        "Hembra",
        "No convive con niños ni otras mascotas"
      ],
      size: "S",
      age: 36,
      gender: "F",
      kidFriendly: "N",
      dogFriendly: "N",
      catFriendly: "N"
    },
    {
      img: "kobu.jpg",
      alt: "dog-kobu",
      name: "Kobu",
      info: [
        "Raza grande",
        "4 años",
        "Macho",
        "Convive con niños y mascotas"
      ],
      size: "L",
      age: 48,
      gender: "M",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "L"
    },
    {
      img: "lilo.jpg",
      alt: "dog-lilo",
      name: "Lilo",
      info: [
        "Raza pequeña",
        "8 meses",
        "Macho",
        "No convive con niños ni mascotas"
      ],
      size: "S",
      age: 8,
      gender: "M",
      kidFriendly: "N",
      dogFriendly: "N",
      catFriendly: "N"
    },
    {
      img: "lion.jpg",
      alt: "dog-lion",
      name: "Lion",
      info: [
        "Raza pequeña",
        "8 años",
        "Macho",
        "Adopción especial"
      ],
      size: "S",
      age: 96,
      gender: "M",
      kidFriendly: "N",
      dogFriendly: "N",
      catFriendly: "N"
    },
    {
      img: "marly.jpg",
      alt: "dog-marly",
      name: "Marly",
      info: [
        "Raza grande",
        "3 meses",
        "Macho",
        "Convive con niños y mascotas"
      ],
      size: "L",
      age: 3,
      gender: "M",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "mika.jpg",
      alt: "dog-mika",
      name: "Mika",
      info: [
        "Raza mediana",
        "6 meses",
        "Hembra",
        "Convive con niños y mascotas"
      ],
      size: "M",
      age: 6,
      gender: "F",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "mongo.jpg",
      alt: "dog-mongo",
      name: "Mongo",
      info: [
        "Raza grande",
        "3 años",
        "Macho",
        "No convive con gatos"
      ],
      size: "L",
      age: 36,
      gender: "M",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "N"
    },
    {
      img: "patto1.jpg",
      alt: "dog-patto",
      name: "Patto",
      info: [
        "Raza mediana",
        "18 meses",
        "Macho",
        "Convive con niños y mascotas"
      ],
      size: "M",
      age: 18,
      gender: "M",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "phily.jpg",
      alt: "dog-phily",
      name: "Phily",
      info: [
        "Raza pequeña",
        "2 años",
        "Hembra",
        "No convive con niños ni mascotas"
      ],
      size: "S",
      age: 24,
      gender: "F",
      kidFriendly: "N",
      dogFriendly: "N",
      catFriendly: "N"
    },
    {
      img: "python.jpg",
      alt: "dog-python",
      name: "Python",
      info: [
        "Raza grande",
        "2 años",
        "Macho",
        "Convive con niños y perros"
      ],
      size: "L",
      age: 24,
      gender: "M",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "N"
    },
    {
      img: "sienna.jpg",
      alt: "dog-sienna",
      name: "Sienna",
      info: [
        "Raza pequeña",
        "9 meses",
        "Hembra",
        "Convive con niños y mascotas"
      ],
      size: "S",
      age: 9,
      gender: "F",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "stif.jpg",
      alt: "dog-stif",
      name: "Stif",
      info: [
        "Raza pequeña",
        "12 meses",
        "Macho",
        "Adopción especial"
      ],
      size: "S",
      age: 12,
      gender: "M",
      kidFriendly: "N",
      dogFriendly: "N",
      catFriendly: "N"
    },
    {
      img: "wamba2.jpg",
      alt: "dog-wamba",
      name: "Wamba",
      info: [
        "Raza pequeña",
        "2 años",
        "Hembra",
        "No convive con gatos"
      ],
      size: "S",
      age: 24,
      gender: "F",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "N"
    },
    {
      img: "xico.jpg",
      alt: "dog-xico",
      name: "Xico",
      info: [
        "Raza pequeña",
        "3 años",
        "Macho",
        "Convive con niños y mascotas"
      ],
      size: "S",
      age: 36,
      gender: "F",
      kidFriendly: "Y",
      dogFriendly: "Y",
      catFriendly: "Y"
    },
    {
      img: "yeyo.jpg",
      alt: "dog-yeyo",
      name: "Yeyo",
      info: [
        "Raza pequeña",
        "18 meses",
        "Macho",
        "No convive con niños ni mascotas"
      ],
      size: "S",
      age: 18,
      gender: "M",
      kidFriendly: "N",
      dogFriendly: "N",
      catFriendly: "N"
    }
  ];

  const form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.getElementById("filter");

    const dataFiltered = filterPets(data, input.value);
    addPetsToHTML(dataFiltered);
  });

  function filterPets(data, type) {
    return data.filter(function(pet) {
      return pet.type === type;
    });
  }
  
  function createElement(type, classNames) {
    const element = document.createElement(type);
  
    if ("undefined" === typeof classNames) {
      return element;
    }
  
    if ("string" === typeof classNames) {
      classNames = [classNames];
    }
  
    classNames.forEach(function(className){
      element.classList.add(className);
    });
  
    return element;
  };
  
  function createPetHTML(pet) {
    const article = createElement("article", "top-pets");
    const div = createElement("div", "top-pets-content");
    const figure = createElement("figure"); 
    const img = createElement("img");
    const h3 = createElement("h3");
    const p = createElement("p");
    const a = createElement("a");
  
    pet.info.forEach(function(e) {
      p.appendChild(document.createTextNode(e))
      p.appendChild(createElement("br"))
    })
    h3.innerText = pet.name;
    img.src = `/static/images/dogs/${pet.img}`;
    img.alt = pet.alt;
  
    a.href = "#";
    a.innerText = "Adopta→";
  
    figure.appendChild(img);
  
    div.appendChild(figure);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(a);
  
    article.appendChild(div);
  
    return article;
  };

  function addPetsToHTML(pets) {
    const section = document.getElementsByClassName("pets-and-info")[0];
    section.innerHTML = "";

    const petsHTML = pets.map(function(pet) {
      return createPetHTML(pet);
    });
    
    petsHTML.forEach(function(pet){
      section.appendChild(pet);
    });
  }

  addPetsToHTML(data);