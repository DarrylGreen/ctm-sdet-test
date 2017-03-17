Feature: Comparing prices for a single energy type when a customer has their bill
  As a customer who has their details to hand
  In order to compare prices
  I want to be able to enter my bill details

  Scenario Outline: Customer with a bill comparing prices
    Given I am a customer with a postcode <postcode>
    And I have a bill
    And I am a <supplier> customer for both gas and electricity
    When I enter that my electricity tariff is <energy_tariff>
    And I enter that my method of payment for electricity is <payment_method>
    And I enter that my electricity usage is <elec_usage> kWh
    And I enter that my gas tariff is <energy_tariff>
    And I enter that my method of payment for gas is <payment_method>
    And I enter that my gas usage is <gas_usage> kWh
    Then I should be able to enter my preference for <tariff> tariffs and <payment> payments
    And I should be able to enter my contact details
    And I should see a progress bar and rewards while page loads
    And I should see my current tariff and usage
    And I should see a cheapest price comparison option
    And I should see a table with price comparison results

    Examples:
      | supplier       | postcode | energy_tariff            | payment_method         | elec_usage | gas_usage  | tariff   | payment    |
      | british-gas    | PE2 6YS  | Standard                 | Monthly Direct Debit   | 3000       | 12500      | fixed    | monthly    |
      | edf            | PE2 6YS  | Standard  (Variable)     | Pay On Receipt Of Bill | 3000       | 12500      | variable | quarterly  |
      | eon            | PE2 6YS  | Age UK Fixed 1 year      | Quarterly Direct Debit | 3000       | 12500      | all      | onbill     |
      | npower         | PE2 6YS  | Feel Good Fix April 2017 | Monthly Direct Debit   | 3000       | 12500      | fixed    | all        |
      | scottish-power | PE2 6YS  | Standard                 | Monthly Direct Debit   | 3000       | 12500      | variable | monthly    |
      | sse            | PE2 6YS  | 1yr Fixed Price          | Quarterly Direct Debit | 3000       | 12500      | all      | quarterly  |
