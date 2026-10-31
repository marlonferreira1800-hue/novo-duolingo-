import json
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).parent

def capture(page, name):
    page.wait_for_timeout(4500)
    page.screenshot(path=str(OUT / f'{name}.png'), full_page=True)
    data = page.evaluate('''() => ({url: location.href, title: document.title, text: document.body.innerText, links: Array.from(document.querySelectorAll('a[href]')).map(a => ({text:a.innerText, href:a.getAttribute('href')})), controls:Array.from(document.querySelectorAll('button,input,textarea,select')).map(e => ({tag:e.tagName,text:e.innerText,placeholder:e.placeholder,type:e.type})), styles:Array.from(document.querySelectorAll('h1,h2,button,input,body')).slice(0,30).map(e => {const s=getComputedStyle(e); return {tag:e.tagName,text:e.innerText.slice(0,100),font:s.fontFamily,size:s.fontSize,color:s.color,background:s.backgroundColor,radius:s.borderRadius}})})''')
    (OUT / f'{name}.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(name, data['url'], data['text'][:900], flush=True)
    return data

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width':1366,'height':900}, device_scale_factor=1)
    page = context.new_page()
    page.goto('https://wondering.app', wait_until='domcontentloaded')
    capture(page, 'home-desktop')
    page.get_by_role('button', name='Start Learning', exact=True).first.click()
    capture(page, 'start-learning')
    for name, url in [('explore','https://wondering.app/explore'),('personalize','https://wondering.app/learn-ai'),('public-course','https://wondering.app/learn/attention-is-all-you-need-zp2vvu')]:
        try:
            page.goto(url, wait_until='domcontentloaded', timeout=45000)
            capture(page, name)
        except Exception as e:
            print(name, str(e), flush=True)
    page.set_viewport_size({'width':390,'height':844})
    page.goto('https://wondering.app', wait_until='domcontentloaded')
    capture(page, 'home-mobile')
    browser.close()
