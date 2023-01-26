	const closeButton = document.getElementsByClassName("close")[0];
	const okButton = document.getElementsByClassName("success")[0];
	const cancelButton = document.getElementsByClassName("cancel")[0];
	const modal = document.getElementsByClassName("container")[0];
	const openModalButton = document.getElementsByClassName("button-open")[0];

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
		if (showModal) {
			modal.classList.add("display");
		} else {
			modal.classList.remove("display");
		}
	}

	closeButton.addEventListener("click", toggleModal);
	okButton.addEventListener("click", toggleModal);
	cancelButton.addEventListener("click", toggleModal);
	openModalButton.addEventListener("click", toggleModal);
