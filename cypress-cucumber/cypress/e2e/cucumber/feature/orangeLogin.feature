Feature: Orange-HRM Login Functionality

  Scenario: Login and Logout with Valid Credentials
    Given User open the OrangeHRM login page
    When User enters valid username and password
    And User clicks on the login button
    Then User should be logged in successfully
    When User clicks on the userdropdown-name link
    And User clicks on the logout link
    Then User should be logged out successfully
