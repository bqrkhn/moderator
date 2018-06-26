<?php
session_start();
include("db_connect.php");
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Moderator | Home</title>
  </head>
  <body>
    <?php
    if(!isset($_SESSION['username'])){
      header("Location:login.php");
    }
    include("navbar.php");
    $sql = "SELECT * FROM info ORDER BY score DESC";
    $result = $con->query($sql);
    $i=1;
    ?>
    <div class="container">
      <div class="row">
        <?php
        $sql = "SELECT * FROM scholars ORDER BY articles_reviewed DESC LIMIT 5";
        $result = $con->query($sql);
        ?>
        <div class="col-lg-3"  style="margin-left: 2.5%;">
          <h3>Top Scholars:</h3><br /><br />
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Based on number of articles reviewed:
            </div>
            <ul class="list-group list-group-flush">
              <?php
                while($row = $result->fetch_assoc()) {?>
              <li class="list-group-item">  @<?php echo $row['username']; ?>&nbsp;&nbsp;(<code><?php echo $row['articles_reviewed']; ?></code>)</li>
              <?php } ?>
            </ul>
          </div>
        </div>
        <?php
        $sql = "SELECT * FROM info ORDER BY daily_count DESC LIMIT 5";
        $result = $con->query($sql);
        ?>
        <div class="col-lg-3 offset-lg-1">
          <h3>Trending:</h3><br /><br />
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Based on articles visited most in a day:
            </div>
            <ul class="list-group list-group-flush">
              <?php
                while($row = $result->fetch_assoc()) {?>
              <li class="list-group-item"> <a href="<?php echo $row['url']; ?>"><?php echo custom_echo($row['url'],27);?></a>&nbsp;&nbsp;(<code><?php echo $row['daily_count']; ?></code>)</li>
              <?php } ?>
            </ul>
          </div>
        </div>
        <?php
        $sql = "SELECT * FROM info ORDER BY lifetime_count DESC LIMIT 5";
        $result = $con->query($sql);
        ?>
        <div class="col-lg-3 offset-lg-1">
          <h3>All time popular:</h3><br /><br />
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Based on all time most visited articles:
            </div>
            <ul class="list-group list-group-flush">
              <?php
                while($row = $result->fetch_assoc()) {?>
                  <li class="list-group-item"> <a href="<?php echo $row['url']; ?>"><?php echo custom_echo($row['url'],27);?></a>&nbsp;&nbsp;(<code><?php echo $row['lifetime_count']; ?></code>)</li>
              <?php } ?>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://localhost/moderator/send.js"></script>
  </body>
</html>
