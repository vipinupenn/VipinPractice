package stepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "c:\\Users\\vipin\\Desktop\\RestAssured_Vipin\\src\\test\\resources\\functionalTests",
        glue= {"stepDefinitions"},
        tags={"@Test"},
        plugin = { "pretty", "html:target/cucumber-reports" },
        monochrome = true
)
public class TestRunner {

    }

