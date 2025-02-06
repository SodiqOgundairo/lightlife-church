<?php

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database configuration
$servername = "lightlifechurch.com"; // Change this to your database server
$username = "lightlif_lightlif"; // Change this to your database username
$password = "lightlif_lightlif"; // Change this to your database password
$dbname = "lightlif_programmes"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if hlc_registrations table exists
// $sql = "SHOW TABLES LIKE 'hlc_registrations'";
// $result = $conn->query($sql);

// if ($result->num_rows == 0) {
//     // Create hlc_registrations table
//     $createTableSql = "CREATE TABLE hlc_registrations (
//         id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//         fullName VARCHAR(255) NOT NULL,
//         gender VARCHAR(10) NOT NULL,
//         phoneNumber VARCHAR(20) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         isMember TINYINT(1) NOT NULL,
//         otherChurch VARCHAR(255),
//         role VARCHAR(255),
//         heardFrom VARCHAR(255),
//         attendedBefore TINYINT(1) NOT NULL,
//         expectations TEXT,
//         hasSpecialNeeds TINYINT(1) NOT NULL,
//         specialNeeds TEXT,
//         isVolunteer TINYINT(1) NOT NULL,
//         volunteerCapacity TEXT,
//         accommodation TEXT
//     )";

//     if ($conn->query($createTableSql) === TRUE) {
//         echo "Table hlc_registrations created successfully";
//     } else {
//         echo "Error creating table: " . $conn->error;
//     }
// }

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO hlc_registrations (fullName, gender, phoneNumber, email, isMember, otherChurch, role, heardFrom, attendedBefore, expectations, hasSpecialNeeds, specialNeeds, isVolunteer, volunteerCapacity, accommodation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssssssss", $fullName, $gender, $phoneNumber, $email, $isMember, $otherChurch, $role, $heardFrom, $attendedBefore, $expectations, $hasSpecialNeeds, $specialNeeds, $isVolunteer, $volunteerCapacity, $accommodation);

// Set parameters and execute
$fullName = $_POST['fullName'];
$gender = $_POST['gender'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$isMember = $_POST['isMember'];
$otherChurch = $_POST['otherChurch'];
$role = $_POST['role'];
$heardFrom = $_POST['heardFrom'];
$attendedBefore = $_POST['attendedBefore'];
$expectations = $_POST['expectations'];
$hasSpecialNeeds = $_POST['hasSpecialNeeds'];
$specialNeeds = $_POST['specialNeeds'];
$isVolunteer = $_POST['isVolunteer'];
$volunteerCapacity = $_POST['volunteerCapacity'];
$accommodation = $_POST['accommodation'];

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>