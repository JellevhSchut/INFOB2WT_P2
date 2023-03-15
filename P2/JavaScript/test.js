const content = [
    {
      title: "First Section",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200/300",
    }
  ];

  function createContent(content) {
    const contentDiv = document.getElementById("content");
  
    content.forEach((section) => {
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
  
      const titleElement = document.createElement("h2");
      titleElement.innerText = section.title;
  
      const descriptionElement = document.createElement("p");
      descriptionElement.innerText = section.description;
  
      const imageElement = document.createElement("img");
      imageElement.src = section.image;
  
      sectionDiv.appendChild(titleElement);
      sectionDiv.appendChild(descriptionElement);
      sectionDiv.appendChild(imageElement);
  
      contentDiv.appendChild(sectionDiv);
    });
  }

  createContent(content);

  
  