Feature: Comparing prices when a customer doesnt have a bill, but has their payment cost
  As a customer who doesnt have their bill to hand
  In order to get a comparison estimate
  I want to be able to state how much I pay

  Scenario Outline: Customer without bill but knows their payments 
    Given I am a customer with a postcode <postcode>
    And I do not have a bill
    And I am a <supplier> customer
    When I enter that I pay <elec_cost> <elec_period> for electricity
    And I enter that I pay <gas_cost> <gas_period> for gas
    Then I should be able to enter my preference for <tariff> tariffs and <payment> payments
    And I should be able to enter my contact details
    And I should see a progress bar and rewards while page loads
    And I should see my current tariff and usage
    And I should see a cheapest price comparison option
    And I should see a table with price comparison results

    Examples:
      | supplier       | postcode | elec_cost | elec_period | gas_cost | gas_period  | tariff   | payment    |
      | british-gas    | PE2 6YS  | 100       | Monthly     | 100      | Monthly     | fixed    | monthly    |
      | edf            | PE2 6YS  | 300       | Quarterly   | 300      | Quarterly   | variable | quarterly  |
      | eon            | PE2 6YS  | 600       | Six Monthly | 600      | Six Monthly | all      | onbill     |
      | npower         | PE2 6YS  | 1200      | Annually    | 1200     | Annually    | fixed    | all        |
      | scottish-power | PE2 6YS  | 100       | Monthly     | 300      | Quarterly   | variable | monthly    |
      | sse            | PE2 6YS  | 600       | Six Monthly | 1200     | Annually    | all      | quarterly  |
      