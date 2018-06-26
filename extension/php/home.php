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
        <div class="col-lg-12">
          <h3>To be reviewed:</h3><br /><br />
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Link</th>
                <th scope="col">Our Score</th>
                <th scope="col">Your Rating</th>
                <th scope="col">Submit</th>
              </tr>
            </thead>
            <tbody>
              <?php
                while($row = $result->fetch_assoc()) {?>
                  <tr>
                    <th scope="row"><?php echo $i++;?></th>
                    <td><a href="<?php echo $row['url'];?>"><?php echo custom_echo($row['url'],50);?></a></td>
                    <td><?php echo $row['score'];?></td>
                    <td>
                        <select class="form-control" id="<?php echo $row['id'];?>">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </td>
                      <td>
                        <button class="btn btn-success" onclick="send(<?php echo $row['id'];?>)">Submit</button>
                      </td>
                  </tr>
                <?php
                }
               ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://localhost/moderator/send.js"></script>
  </body>
</html>
