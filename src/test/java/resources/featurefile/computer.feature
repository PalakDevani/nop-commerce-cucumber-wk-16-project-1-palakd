Feature: Computer Test
  As a use I want to go on computer page

  @smoke
  @regression
  Scenario:Verify user should navigate to computer page successfully
    Given I am on homepage
    When I click on Computer Tab
    Then I Verify Computer text

  @sanity
  @regression
  Scenario: Verify user should navigate to Desktops page successfully
    Given I am on homepage
    When I click on Computer Tab
    And I Click on Desktops link
    And I verify Desktops text

  @Regression
  Scenario Outline: verify That User Should Build Your Own Computer And Add To Cart Successfully
    Given   I am on homepage
    When    I click on Computer Tab
    And     I Click on Desktops link
    And     I select product "Build your own computer"
    And     I select processor"<processor>"
    And     I select RAM "<ram>"
    And     I select HDD "<hdd>"
    And     I select OS "<os>"
    And     I select Software "<software>"
    And     I click on Add to Cart Button
    Then    I can add product to cart successfully
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista  Home [+$50.00]   | Total Commander [+$5.00]   |







#Feature: Computer Page Test
#  As a user I want to click on desktop tab on computer page
#
#  @smoke
#  @regression
#  Scenario: Verify user should navigate to computer page successfully
#    Given I am on homepage
#    When I click on Computers tab on topMenu
#    Then I verify the PageTitle is 'Computers'
#
#  @sanity
#  @regression
#  Scenario: Verify that user should navigate to desktops page successfully
#    Given I am on homepage
#    When I click on Computers tab on topMenu
#    And I click On desktops tab on computers page
#    Then I verify the PageTitle is Desktops
#
#@regression
#  Scenario: verify that user should be able to build own computer and add to cart successfully
#    Given I am on Homepage
#    When I click on Computers tab on topMenu
#    And I click On desktops tab on computers page
#    And I click on build your own computer
#    And I enter following to build own computer
#      | processor                                       | ram           | hdd               | os                      | software                   |
#      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
#      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
#      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista  Home [+$50.00]   | Total Commander [+$5.00]   |
#    And I click on add to cart button
#  Then I add product to cart
#
#
#
#
#

#
#Feature: Homepage Test
#  As a user I want to click on the top menu tabs on the homepage
#
#  @smoke
#  Scenario Outline: User should be able to click on top menu tabs on the homepage
#    Given I am on homepage
#    When I click On "<topMenuTabs>"
#    Then I should be able to navigate to that menu's page successfully
#
#    Examples:
#      | topMenuTabs       |
#      | Computers         |
#      | Electronics       |
#      | Apparel           |
#      | Digital downloads |
#      | Books             |
#      | Jewelry           |
#      | Gift Cards        |
#
#
