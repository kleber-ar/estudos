from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By

if __name__ == "__main__":
    with Firefox() as browser:
        browser.implicitly_wait(4)
        input("Pressione enter para continuar...")
        browser.get("https://github.com")
        browser.find_element(By.CSS_SELECTOR, "span.flex-1").click()
        input_element = browser.find_element(
            By.CSS_SELECTOR, "#query-builder-test"
        )
        input_element.send_keys("vitor buxbaum")
        input_element.submit()
        browser.find_element(
            By.CSS_SELECTOR, '[data-testid="nav-item-users"]'
        ).click()

        first_result = browser.find_element(
            By.CSS_SELECTOR, "div.search-title a"
        )
        first_result.click()
        github_graph = browser.find_element(By.CLASS_NAME, "js-calendar-graph")
        github_graph.screenshot("github.png")
        browser.quit()
