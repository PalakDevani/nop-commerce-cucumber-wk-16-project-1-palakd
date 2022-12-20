package com.nopcommerce.demo.cucumber;

import com.cucumber.listener.Reporter;
import com.nopcommerce.demo.propertyreader.PropertyReader;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;



public class Hooks extends Utility {

     @Before // @Before and @After must be of cucumber api if not selected junit it will never open browser
    public void setUp(){
         selectBrowser(PropertyReader.getInstance().getProperty("browser"));
     }


     @After
     public void tearDown(Scenario scenario) {
         if (scenario.isFailed()) {
             String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
             try {
                 Reporter.addScreenCaptureFromPath(screenShotPath);
             } catch (IOException e) {
                 e.printStackTrace();
             }
         }
         closeBrowser();
     }




}
