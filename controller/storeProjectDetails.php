<?php>

DEFINE ('DB_USER', 'hammertag')
DEFINE ('DB_PSD', 'nazirbasheer123')
DEFINE ('DB_HOST', '148.66.137.25')
DEFINE ('DB_NAME', 'hammertag')

$dbconnection = mysqli_connect(DB_HOST, DB_USER, DB_PSD, DB_NAME);

if(!$dbconnection) {
    die(
        'error connnecting to database'
    )
}

echo 'you have connected successfully'

?>