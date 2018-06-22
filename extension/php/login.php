<?php  session_start();
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

    <title>Login Page</title>
  </head>
  <body><br />
    <?php
    if(isset($_SESSION['username'])){
      header("Location:home.php");
    }
    if(isset($_POST['login'])) {
     $user = $_POST['user'];
     $pass = $_POST['pass'];
     $sql = "SELECT * FROM scholars WHERE username='$user' AND password='$pass'";
     $result = $con->query($sql);
     $result = array($result->fetch_assoc());
      if($result){
          $_SESSION['username']=$result;
          header("Location:home.php");
          }
        else
        {
            echo "invalid UserName or Password";
        }
} else { ?>
  <div class="container">
    <h1>Login:</h1><hr /></br>
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <form action="" method="post">
          <div class="form-group">
            <label for="name">Username:</label>
            <input type="text" class="form-control" name="user">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" name="pass">
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox"> Remember me
            </label>
          </div>
          <button type="submit" name="login" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
<?php } ?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
