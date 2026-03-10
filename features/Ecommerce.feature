Feature: Ecommerce validations
  @Regression
  Scenario: Placing the order
    Given a login to Ecommerce aplication with "gerardoaranciaga60@gmail.com" and "River22-"
    When add "iphone 13 pro" to Cart
    Then verify "iphone 13 pro" is displayed in the Cart
    When enter valid details "gerardoaranciaga60@gmail.com" "Argentina" and place the order
    Then verify order in present in the orders

  @Validation
  Scenario Outline: Placing the order
    Given A login to Ecommerce2 aplication with "<username>" and "<password>"
    Then Verify error message is displayed

    Examples:
        | username                      | password |
        | gerardoaranciaga60@gmail.com  | River22- |
        | gege@gmail.com                | River22- |