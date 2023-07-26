Feature: Playwright with Cucumber



 Background:
    Given User navigates to the application
    And User click on the login link
   
    Scenario Outline: Login and Search the Book
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the login button
    And user Search for a Book is "<Book>"
    When user add the book to the cart
    Then the card badge should get updates
    Examples:
            | username  | password   | Book              |
            |  ortoni   | Pass1234   |  Roomies          |
            |  ortonikc | Pass12345  |  The Simple Wild  |