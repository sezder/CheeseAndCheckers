window.addEventListener("load", (event) => {


    // ----- when "add game shelf" is clicked, an input box will appear -------
    const addShelfBtn = document.getElementById('addShelfBtn');
    const createAddShelf = document.getElementById("createAddShelf");


    addShelfBtn.addEventListener("click", (event) => {
        createAddShelf.removeChild(addShelfBtn)

        const inputShelf = document.createElement("input");
        inputShelf.name = "shelfInput";
        inputShelf.type = 'text';

        const addShelf = document.createElement("button");
        addShelf.innerText = "Add a Shelf";
        addShelf.type = "submit";


        createAddShelf.appendChild(inputShelf);
        createAddShelf.appendChild(addShelf);


        const createHtmlShelf = (shelfName, shelfId) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.setAttribute("href", `/gameshelves/${shelfId}`);
            a.innerText = shelfName;
            li.appendChild(a);
            return li;
        }

        const appendNewShelf = htmlshelf => {
            const shelfList = document.getElementById("shelfList");
            shelfList.appendChild(htmlshelf);
        }

        const revertHtml = () => {
            createAddShelf.removeChild(inputShelf)
            createAddShelf.removeChild(addShelf)
            createAddShelf.appendChild(addShelfBtn)
        }

        addShelf.addEventListener("click", async(e) => {
            const res = await fetch(`/gameshelves/${inputShelf.value}`, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {'Content-Type': 'application/json'}, // 'Content-Type': 'application/x-www-form-urlencoded',
            });
            const result = await res.json()
            console.log("result =", result.newShelfId);
            const shelfId = result.newShelfId;
            if (Number(shelfId)) {
                const htmlShelf = createHtmlShelf(inputShelf.value, shelfId);
                appendNewShelf(htmlShelf);
                revertHtml();
            }
        })
    })



    // ----- when "submit game shelf" is clicked, game shelf is added to shelves -------

    const addShelfBtn = document.getElementById("addShelfBtn");
    addShelfBtn.addEventListener("click", async (event) => {
    // const gameShelfId = event.target.value  // this gets the checked game (id)
    console.log("---------- clicked! -----------");
    console.log(event.target);
    // fetch request
    // Default options are marked with *
    const res = await fetch(`/gameshelves/:newshelf`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: { "Content-Type": "application/json" }, // 'Content-Type': 'application/x-www-form-urlencoded',
    });
    return res.json(); // parses JSON response into native JavaScript objects
    });



});