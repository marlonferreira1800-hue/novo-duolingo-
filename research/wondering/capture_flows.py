import json
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).parent

def save(page, name):
    page.wait_for_timeout(3500)
    page.screenshot(path=str(OUT / f'{name}.png'), full_page=True)
    data = {'url':page.url,'text':page.locator('body').inner_text(),'controls':page.locator('button,input,textarea,select').evaluate_all('(els) => els.map(e => ({tag:e.tagName,text:e.innerText,placeholder:e.placeholder,type:e.type}))')}
    (OUT / f'{name}.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(name, json.dumps(data, ensure_ascii=True)[:6500], flush=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width':1366,'height':900})
    page.goto('https://wondering.app/learn/attention-is-all-you-need-zp2vvu', wait_until='domcontentloaded')
    page.get_by_role('button',name='Preview Lesson',exact=True).last.click()
    save(page,'lesson-preview')
    page.get_by_role('button',name='NEXT',exact=True).click()
    save(page,'lesson-next')
    page.goto('https://wondering.app/get-started', wait_until='domcontentloaded')
    page.wait_for_timeout(7000)
    welcome = page.get_by_role('button',name="LET'S GO!",exact=True)
    if welcome.count():
        welcome.click()
    save(page,'onboarding-next')
    page.goto('https://wondering.app/learn-ai', wait_until='domcontentloaded')
    page.wait_for_timeout(7000)
    save(page,'personalize-loaded')
    if page.get_by_role('button',name='CONTINUE',exact=True).count():
        page.get_by_role('button',name='CONTINUE',exact=True).click()
        save(page,'personalize-next')
    page.goto('https://wondering.app', wait_until='domcontentloaded')
    page.wait_for_timeout(7000)
    page.get_by_role('button',name='SIGN IN',exact=True).click()
    save(page,'sign-in')
    browser.close()
