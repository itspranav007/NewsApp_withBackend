const select = (selector) => {
  return document.querySelector(selector);
};
const form = select(".form");
const Message = select(".message");

const DisplayMessage = (text, color) => {
  Message.style.visibility = "visible";
  Message.style.backgroundColor = color;
  Message.innerText = text;

  setTimeout(() => {
    Message.style.visibility = "hidden";
  }, 3000);
};

const validateForm = () => {
  const title = select("#title").value.trim();
  const content = select("#content").value.trim();
  const thumbnail = select("#thumbnail").value;
  const category = select("#category").value;

  const exceptedImageFiles = ["jpg", "png", "jpeg"];

  if (!title || !content || !thumbnail || category == "0") {
    //Show Error in Display msg
    return DisplayMessage("Field Cannot be Emplty", "red");
  }

  const extension = thumbnail.split(".").pop();
  if (!exceptedImageFiles.includes(extension)) {
    return DisplayMessage("Image Fille is Not Valid", "red");
  }

  return true;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const valid = validateForm();

  if (valid) {
    //Submit form
    const formdata = new FormData(form);
    await PostData(formdata);
  }

  
});

const PostData = async (data) => {
  const URL = "http://localhost:5000/api/create";

  await fetch(URL, { method: "POST", body: data });
};

