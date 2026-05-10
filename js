
        const form = document.getElementById("task-form");
        const taskList = document.getElementById("task-list");

        form.addEventListener("submit", addtask);

		function addtask(event) {

            event.preventDefault();

            const titleInput = document.getElementById("title");
            const descriptionInput = document.getElementById("description");

			const title =titleInput.value.trim();
			const description = descriptionInput.value.trim();

			if (title === "") return;

			const li = document.createElement("li");
			li.classList.add("task-item");

			li.innerHTML = `
				<div class="task-content">
                    <h3>${title}</h3>
                    <p>${description || "Sin descripción"}</p>
				</div>

                <button class="delete-btn">
                    Eliminar
                </button>
            `;

            const deleteButton = li.querySelector(".delete-btn");

            deleteButton.addEventListener("click", function () {
                li.remove();
            });

            taskList.appendChild(li);

			form.reset();
		};
