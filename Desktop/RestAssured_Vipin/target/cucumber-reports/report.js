$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("POST.feature");
formatter.feature({
  "line": 2,
  "name": "Testing POST feature",
  "description": "",
  "id": "testing-post-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Getting json place holder users",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I get results for \u003cRecord\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the response results with name \u003cName\u003e, User Name \u003cUserName\u003e, Email \u003cEmail\u003e, Street \u003cStreet\u003e, Zip Code \u003cZipCode\u003e, City \u003cCity\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-users;",
  "rows": [
    {
      "cells": [
        "Record",
        "Name",
        "UserName",
        "Email",
        "Street",
        "ZipCode",
        "City"
      ],
      "line": 12,
      "id": "testing-post-feature;getting-json-place-holder-users;;1"
    },
    {
      "cells": [
        "1",
        "Leanne Graham",
        "Bret",
        "Sincere@april.biz",
        "Kulas Light",
        "92998-3874",
        "Gwenborough"
      ],
      "line": 13,
      "id": "testing-post-feature;getting-json-place-holder-users;;2"
    },
    {
      "cells": [
        "2",
        "Ervin Howell",
        "Antonette",
        "Shanna@melissa.tv",
        "Victor Plains",
        "90566-7771",
        "Wisokyburgh"
      ],
      "line": 14,
      "id": "testing-post-feature;getting-json-place-holder-users;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Getting json place holder users",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Test1"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I get results for 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the response results with name Leanne Graham, User Name Bret, Email Sincere@april.biz, Street Kulas Light, Zip Code 92998-3874, City Gwenborough",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "POSTSteps.iamonApplication()"
});
formatter.result({
  "duration": 1464533100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "POSTSteps.iEnteringBodyParameters(String)"
});
formatter.result({
  "duration": 2273075600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leanne Graham",
      "offset": 40
    },
    {
      "val": "Bret",
      "offset": 65
    },
    {
      "val": "Sincere@april.biz",
      "offset": 77
    },
    {
      "val": "Kulas Light",
      "offset": 103
    },
    {
      "val": "92998-3874",
      "offset": 125
    },
    {
      "val": "Gwenborough",
      "offset": 142
    }
  ],
  "location": "POSTSteps.iVerifyTheStatusCode(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 129479300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Getting json place holder users",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Test1"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I get results for 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the response results with name Ervin Howell, User Name Antonette, Email Shanna@melissa.tv, Street Victor Plains, Zip Code 90566-7771, City Wisokyburgh",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "POSTSteps.iamonApplication()"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "POSTSteps.iEnteringBodyParameters(String)"
});
formatter.result({
  "duration": 109511000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ervin Howell",
      "offset": 40
    },
    {
      "val": "Antonette",
      "offset": 64
    },
    {
      "val": "Shanna@melissa.tv",
      "offset": 81
    },
    {
      "val": "Victor Plains",
      "offset": 107
    },
    {
      "val": "90566-7771",
      "offset": 131
    },
    {
      "val": "Wisokyburgh",
      "offset": 148
    }
  ],
  "location": "POSTSteps.iVerifyTheStatusCode(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 21321700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Getting json place holder comments",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-comments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I get comments results for \u003cRecord\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify the response results of Comments with name \u003cName\u003e, Email \u003cEmail\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-comments;",
  "rows": [
    {
      "cells": [
        "Record",
        "Name",
        "Email"
      ],
      "line": 24,
      "id": "testing-post-feature;getting-json-place-holder-comments;;1"
    },
    {
      "cells": [
        "1",
        "id labore ex et quam laborum",
        "Eliseo@gardner.biz"
      ],
      "line": 25,
      "id": "testing-post-feature;getting-json-place-holder-comments;;2"
    },
    {
      "cells": [
        "2",
        "quo vero reiciendis velit similique earum",
        "Jayne_Kuhic@sydney.com"
      ],
      "line": 26,
      "id": "testing-post-feature;getting-json-place-holder-comments;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Getting json place holder comments",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-comments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Test2"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I get comments results for 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify the response results of Comments with name id labore ex et quam laborum, Email Eliseo@gardner.biz",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "POSTSteps.iamonApplication()"
});
formatter.result({
  "duration": 41600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "POSTSteps.iEnteringParameters(String)"
});
formatter.result({
  "duration": 96172500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id labore ex et quam laborum",
      "offset": 52
    },
    {
      "val": "Eliseo@gardner.biz",
      "offset": 88
    }
  ],
  "location": "POSTSteps.iVerifyTheStatusCodeComments(String,String)"
});
formatter.result({
  "duration": 2605400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Getting json place holder comments",
  "description": "",
  "id": "testing-post-feature;getting-json-place-holder-comments;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Test2"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I get comments results for 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify the response results of Comments with name quo vero reiciendis velit similique earum, Email Jayne_Kuhic@sydney.com",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "POSTSteps.iamonApplication()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "POSTSteps.iEnteringParameters(String)"
});
formatter.result({
  "duration": 100326000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quo vero reiciendis velit similique earum",
      "offset": 52
    },
    {
      "val": "Jayne_Kuhic@sydney.com",
      "offset": 101
    }
  ],
  "location": "POSTSteps.iVerifyTheStatusCodeComments(String,String)"
});
formatter.result({
  "duration": 5458000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Creating json place holder Posts",
  "description": "",
  "id": "testing-post-feature;creating-json-place-holder-posts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I create record for POSTS with user id \u003cUser Id\u003e, id \u003cId\u003e, title \u003cTitle\u003e, body \u003cBody\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I verify the response with id \u003cId\u003e, title \u003cTitle\u003e, body \u003cBody\u003e, userId \u003cUser Id\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "testing-post-feature;creating-json-place-holder-posts;",
  "rows": [
    {
      "cells": [
        "User Id",
        "Id",
        "Title",
        "Body"
      ],
      "line": 36,
      "id": "testing-post-feature;creating-json-place-holder-posts;;1"
    },
    {
      "cells": [
        "101",
        "101",
        "Test101",
        "Body101"
      ],
      "line": 37,
      "id": "testing-post-feature;creating-json-place-holder-posts;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Creating json place holder Posts",
  "description": "",
  "id": "testing-post-feature;creating-json-place-holder-posts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@Test3"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on json Place holder application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I create record for POSTS with user id 101, id 101, title Test101, body Body101",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I verify the response with id 101, title Test101, body Body101, userId 101",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "POSTSteps.iamonApplication()"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 39
    },
    {
      "val": "101",
      "offset": 47
    },
    {
      "val": "Test101",
      "offset": 58
    },
    {
      "val": "Body101",
      "offset": 72
    }
  ],
  "location": "POSTSteps.iCreateRecord(String,String,String,String)"
});
formatter.result({
  "duration": 225303800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 30
    },
    {
      "val": "Test101",
      "offset": 41
    },
    {
      "val": "Body101",
      "offset": 55
    },
    {
      "val": "101",
      "offset": 71
    }
  ],
  "location": "POSTSteps.iverifyPostResponse(int,String,String,String)"
});
formatter.result({
  "duration": 3084800,
  "status": "passed"
});
});