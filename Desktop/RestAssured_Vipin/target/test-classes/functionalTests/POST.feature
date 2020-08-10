@Test
      Feature: Testing POST feature


      @Test1
      Scenario Outline: Getting json place holder users
        Given I am on json Place holder application
        When I get results for <Record>
        Then I verify the response results with name <Name>, User Name <UserName>, Email <Email>, Street <Street>, Zip Code <ZipCode>, City <City>

      Examples:
        | Record | Name          | UserName  | Email             | Street        | ZipCode    | City        |
        | 1      | Leanne Graham | Bret      | Sincere@april.biz | Kulas Light   | 92998-3874 | Gwenborough |
        | 2      | Ervin Howell  | Antonette | Shanna@melissa.tv | Victor Plains | 90566-7771 | Wisokyburgh |


      @Test2
      Scenario Outline: Getting json place holder comments
         Given I am on json Place holder application
         When I get comments results for <Record>
         Then I verify the response results of Comments with name <Name>, Email <Email>

      Examples:
        | Record | Name                                      | Email                  |
        | 1      | id labore ex et quam laborum              | Eliseo@gardner.biz     |
        | 2      | quo vero reiciendis velit similique earum | Jayne_Kuhic@sydney.com |


      @Test3
      Scenario Outline: Creating json place holder Posts
        Given I am on json Place holder application
        When I create record for POSTS with user id <User Id>, id <Id>, title <Title>, body <Body>
        Then I verify the response with id <Id>, title <Title>, body <Body>, userId <User Id>

        Examples:
          | User Id | Id  | Title   | Body    |
          | 101     | 101 | Test101 | Body101 |







