Feature: Estimating prices when a customer doesnt have a bill
  As a customer who doesnt have their details to hand
  In order to get a comparison estimate
  I want to be able to give details of my usage to estimate cost

  Scenario Outline: Customer unsure of their payments 
    Given I am a customer with a postcode <postcode>
    And I do not have a bill
    And I am a <supplier> customer
    When I enter that I dont know my energy usage
    Then I should be able to give details to estimate my usage
    And I should be able to enter my preference for <tariff> tariffs and <payment> payments
    And I should be able to enter my contact details
    And I should see a progress bar and rewards while page loads
    And I should see my current tariff and usage
    And I should see a cheapest price comparison option
    And I should see a table with price comparison results

    Examples:
      | supplier       | postcode | tariff   | payment    |
      | british-gas    | PE2 6YS  | fixed    | monthly    |
      | edf            | PE2 6YS  | variable | quarterly  |
      | eon            | PE2 6YS  | all      | onbill     |
      | npower         | PE2 6YS  | fixed    | all        |
      | scottish-power | PE2 6YS  | variable | monthly    |
      | sse            | PE2 6YS  | all      | quarterly  |
      