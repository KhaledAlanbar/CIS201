		// Define an array of students
		var students = [
			{ id: 1, name: "Khaled", phone: "123-456-7890", major: "SE" },
			{ id: 2, name: "Hadi", phone: "456-789-0123", major: "NES" },
			{ id: 3, name: "Rayan", phone: "789-012-3456", major: "SE" },
			{ id: 4, name: "Saeed", phone: "012-345-6789", major: "NES" }
		];
      	// Function to display the students in a table
        function displayStudents(students) {
            var table = "<table><tr><th>ID</th><th>Name</th><th>Phone</th><th>Major</th></tr>";
              for (var i = 0; i < students.length; i++) {
                    table += "<tr><td>" + students[i].id + "</td><td>" + students[i].name + "</td><td>" + students[i].phone + "</td><td>" + students[i].major + "</td></tr>";
                }
                table += "</table>";
                document.getElementById("students").innerHTML = table;
                }
        
                // Function to display all students
                function displayAllStudents() {
                    displayStudents(students);
                    document.getElementById("logo").src = "https://media.istockphoto.com/id/1368015499/vector/tech-logotype-design-technology-line-art-icon.jpg?s=612x612&w=0&k=20&c=9z68wBYj9R7DVAuv639DWO4SLEQUlh4s4BadpNx065Q=";
                }
        
		// Function to display only SE students
		function displaySEStudents() {
			var seStudents = students.filter(function(student) {
				return student.major === "SE";
			});
			displayStudents(seStudents);
			document.getElementById("logo").src = "https://ih1.redbubble.net/image.691024790.7244/pp,840x830-pad,1000x1000,f8f8f8.u3.jpg";
		}

		// Function to display only NES students
		function displayNESStudents() {
			var nesStudents = students.filter(function(student) {
				return student.major === "NES";
			});
			displayStudents(nesStudents);
			document.getElementById("logo").src = "https://www.seekpng.com/png/full/203-2037311_vector-royalty-free-library-combating-insider-threats-network.png";
		}