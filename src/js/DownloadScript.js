const downloadCV = document.getElementById("my-cv");
    console.log(downloadCV)
	downloadCV.addEventListener("click", () => {
		const link = document.createElement("a");
		link.href = "/public/myCv.pdf"; // Ruta al archivo en la carpeta public
		link.download = "myCv.pdf";
		link.click();
	});