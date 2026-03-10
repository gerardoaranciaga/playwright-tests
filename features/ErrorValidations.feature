Feature: Ecommerce validations
  @Validation
  Scenario Outline: Placing the order
    Given A login to Ecommerce2 aplication with "<username>" and "<password>"
    Then Verify error message is displayed

    Examples:
        | username                      | password |
        | gerardoaranciaga60@gmail.com  | River22- |
        | gege@gmail.com                | River22- |