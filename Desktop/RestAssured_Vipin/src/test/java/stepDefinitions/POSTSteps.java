package stepDefinitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import stepDefinitions.Comments.Comments;
import stepDefinitions.Posts.Post;
import stepDefinitions.Users.Users;
import org.json.simple.JSONObject;

import java.util.HashMap;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.equalTo;

public class POSTSteps {

//    String res;
    Response response;


   @Given("^I am on json Place holder application$")
   public void iamonApplication()
   {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
   }

    @When("^I get results for (.*)$")
    public void iEnteringBodyParameters(String value)
    {

        response = given().header("Content-Type", "application/json")
                .with().pathParam("param",value)

                .when().get("/users/{param}")
                .then().log().all().assertThat().statusCode(200).extract().response();


    }

    @Then("^I verify the response results with name (.*), User Name (.*), Email (.*), Street (.*), Zip Code (.*), City (.*)$")
    public void iVerifyTheStatusCode(String Name, String UserName, String Email, String Street, String ZipCode, String City)
    {
        String name = response.getBody().as(Users.class).getName();
        String userName = response.getBody().as(Users.class).getUsername();
        String email = response.getBody().as(Users.class).getEmail();
        String street = response.getBody().as(Users.class).getAddress().getStreet();
        String zipcode = response.getBody().as(Users.class).getAddress().getZipcode();
        String city = response.getBody().as(Users.class).getAddress().getCity();


        Assert.assertEquals(Name,name);
        Assert.assertEquals(UserName,userName);
        Assert.assertEquals(Email,email);
        Assert.assertEquals(Street,street);
        Assert.assertEquals(ZipCode,zipcode);
        Assert.assertEquals(City,city);
    }


    @When("^I get comments results for (.*)$")
    public void iEnteringParameters(String value)
    {

        response = given().header("Content-Type", "application/json")
                .with().pathParam("param",value)

                .when().get("/comments/{param}")
                .then().log().all().assertThat().statusCode(200).extract().response();


    }


    @Then("^I verify the response results of Comments with name (.*), Email (.*)$")
    public void iVerifyTheStatusCodeComments(String Name, String Email)
    {
        String name = response.getBody().as(Comments.class).getName();
        String email = response.getBody().as(Comments.class).getEmail();



        Assert.assertEquals(Name,name);
        Assert.assertEquals(Email,email);

    }


    @Then("^I verify the response results of Comments$")
    public void iVerifyTheStatusCodeComments()
    {
        String name = response.getBody().as(Comments.class).getName();
        String email = response.getBody().as(Comments.class).getEmail();
        String body = response.getBody().as(Comments.class).getBody();

        String Name = "id labore ex et quam laborum";
        String Email = "Eliseo@gardner.biz";


        Assert.assertEquals(Name,name);
        Assert.assertEquals(Email,email);
    }

    @When("^I create record for POSTS with user id (.*), id (.*), title (.*), body (.*)$")
    public void iCreateRecord(String userid, String id, String title, String body)
    {
        HashMap<String, Object> map = new HashMap<String, Object>();

        map.put("userId",userid);
        map.put("id",id);
        map.put("title",title);
        map.put("body",body);

        JSONObject request = new JSONObject(map);


        response = given().header("Content-Type", "application/json")
                .body(request)
                .when().post("/posts")
                .then().log().all().extract().response();
    }


    @When("^I verify the response with id (.*), title (.*), body (.*), userId (.*)$")
    public void iverifyPostResponse(int Id, String Title, String Body, String UserId)
    {
       int responseCode = response.getStatusCode();
       Assert.assertEquals(201,responseCode);

       int id = response.getBody().as(Post.class).getId();
       String title = response.getBody().as(Post.class).getTitle();
       String body = response.getBody().as(Post.class).getBody();
       String userId = response.getBody().as(Post.class).getUserId();

       Assert.assertEquals(UserId,userId);
       Assert.assertEquals(Id,id);
       Assert.assertEquals(Title,title);
       Assert.assertEquals(Body,body);

    }
}
