function showInfo(type) {
  const output = document.getElementById("output");

  let text = "";
  let imgSrc = "";

  if (type === "kuliah") {
    text = "Teknik Industri Pertanian – IPB University";
    imgSrc = "logo TIN.png";
  } else if (type === "makanan") {
    text = "Nasi Padang";
    imgSrc = "naspaadd.png";
  } else if (type === "hobi") {
    text = "Bermain dan Menonton Sepak Bola";
    imgSrc = "MUNCHEENN.jpg";
  } else if (type === "cita") {
    text = "Sejauh ini si Process Engineer";
    imgSrc = "gambar cita-cita.jpeg";
  } else if (type === "impian") {
    text = "Asian Agri";
    imgSrc = "logo asian agri.jpeg";
  } else if (type === "follow") {
    text = "Follow @maulanarumi10";
    imgSrc = "LOGO INSTAGRAM.jpeg";
  }

  output.innerHTML = `
    <img src="${imgSrc}" alt="Gambar">
    <div>${text}</div>
  `;
}
