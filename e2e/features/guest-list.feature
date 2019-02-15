Feature: Operator can add guests to his guestlists

  In order to manage guests with my application
  I want to be able add some guets to my guest list

  Scenario Outline: Open page of guest list for guest<name>

    Given that the guest list page is open with <name> in it
    When he selects the user with the name <name>
    Then he is guest attending and <name> is listed on the attending list

    Examples:
      | name                    |
      | John-Wayne              |
      | Dwight-Eisenhauer       |
      | Samantha-Eisenhauer     |

