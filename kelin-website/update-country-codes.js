const fs = require('fs');
const path = require('path');

// Complete country options with Philippines as selected/default
const COMPLETE_COUNTRY_OPTIONS = `<option value="+63" selected>🇵🇭 +63</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+1">🇨🇦 +1</option>
                                            <option value="+52">🇲🇽 +52</option>
                                            <option value="+54">🇦🇷 +54</option>
                                            <option value="+55">🇧🇷 +55</option>
                                            <option value="+56">🇨🇱 +56</option>
                                            <option value="+57">🇨🇴 +57</option>
                                            <option value="+58">🇻🇪 +58</option>
                                            <option value="+51">🇵🇪 +51</option>
                                            <option value="+593">🇪🇨 +593</option>
                                            <option value="+595">🇵🇾 +595</option>
                                            <option value="+598">🇺🇾 +598</option>
                                            <option value="+591">🇧🇴 +591</option>
                                            <option value="+592">🇬🇾 +592</option>
                                            <option value="+597">🇸🇷 +597</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+353">🇮🇪 +353</option>
                                            <option value="+33">🇫🇷 +33</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+39">🇮🇹 +39</option>
                                            <option value="+31">🇳🇱 +31</option>
                                            <option value="+32">🇧🇪 +32</option>
                                            <option value="+41">🇨🇭 +41</option>
                                            <option value="+43">🇦🇹 +43</option>
                                            <option value="+45">🇩🇰 +45</option>
                                            <option value="+46">🇸🇪 +46</option>
                                            <option value="+47">🇳🇴 +47</option>
                                            <option value="+48">🇵🇱 +48</option>
                                            <option value="+420">🇨🇿 +420</option>
                                            <option value="+421">🇸🇰 +421</option>
                                            <option value="+36">🇭🇺 +36</option>
                                            <option value="+40">🇷🇴 +40</option>
                                            <option value="+359">🇧🇬 +359</option>
                                            <option value="+30">🇬🇷 +30</option>
                                            <option value="+351">🇵🇹 +351</option>
                                            <option value="+354">🇮🇸 +354</option>
                                            <option value="+356">🇲🇹 +356</option>
                                            <option value="+357">🇨🇾 +357</option>
                                            <option value="+372">🇪🇪 +372</option>
                                            <option value="+371">🇱🇻 +371</option>
                                            <option value="+370">🇱🇹 +370</option>
                                            <option value="+386">🇸🇮 +386</option>
                                            <option value="+385">🇭🇷 +385</option>
                                            <option value="+381">🇷🇸 +381</option>
                                            <option value="+382">🇲🇪 +382</option>
                                            <option value="+387">🇧🇦 +387</option>
                                            <option value="+389">🇲🇰 +389</option>
                                            <option value="+355">🇦🇱 +355</option>
                                            <option value="+373">🇲🇩 +373</option>
                                            <option value="+380">🇺🇦 +380</option>
                                            <option value="+375">🇧🇾 +375</option>
                                            <option value="+7">🇷🇺 +7</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+852">🇭🇰 +852</option>
                                            <option value="+853">🇲🇴 +853</option>
                                            <option value="+886">🇹🇼 +886</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+60">🇲🇾 +60</option>
                                            <option value="+66">🇹🇭 +66</option>
                                            <option value="+84">🇻🇳 +84</option>
                                            <option value="+62">🇮🇩 +62</option>
                                            <option value="+673">🇧🇳 +673</option>
                                            <option value="+856">🇱🇦 +856</option>
                                            <option value="+855">🇰🇭 +855</option>
                                            <option value="+95">🇲🇲 +95</option>
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+92">🇵🇰 +92</option>
                                            <option value="+880">🇧🇩 +880</option>
                                            <option value="+94">🇱🇰 +94</option>
                                            <option value="+977">🇳🇵 +977</option>
                                            <option value="+975">🇧🇹 +975</option>
                                            <option value="+960">🇲🇻 +960</option>
                                            <option value="+93">🇦🇫 +93</option>
                                            <option value="+98">🇮🇷 +98</option>
                                            <option value="+964">🇮🇶 +964</option>
                                            <option value="+962">🇯🇴 +962</option>
                                            <option value="+966">🇸🇦 +966</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+968">🇴🇲 +968</option>
                                            <option value="+974">🇶🇦 +974</option>
                                            <option value="+973">🇧🇭 +973</option>
                                            <option value="+965">🇰🇼 +965</option>
                                            <option value="+90">🇹🇷 +90</option>
                                            <option value="+972">🇮🇱 +972</option>
                                            <option value="+20">🇪🇬 +20</option>
                                            <option value="+27">🇿🇦 +27</option>
                                            <option value="+234">🇳🇬 +234</option>
                                            <option value="+254">🇰🇪 +254</option>
                                            <option value="+255">🇹🇿 +255</option>
                                            <option value="+256">🇺🇬 +256</option>
                                            <option value="+251">🇪🇹 +251</option>
                                            <option value="+212">🇲🇦 +212</option>
                                            <option value="+213">🇩🇿 +213</option>
                                            <option value="+216">🇹🇳 +216</option>
                                            <option value="+218">🇱🇾 +218</option>
                                            <option value="+233">🇬🇭 +233</option>
                                            <option value="+221">🇸🇳 +221</option>
                                            <option value="+225">🇨🇮 +225</option>
                                            <option value="+237">🇨🇲 +237</option>
                                            <option value="+243">🇨🇩 +243</option>
                                            <option value="+242">🇨🇬 +242</option>
                                            <option value="+240">🇬🇶 +240</option>
                                            <option value="+241">🇬🇦 +241</option>
                                            <option value="+250">🇷🇼 +250</option>
                                            <option value="+257">🇧🇮 +257</option>
                                            <option value="+260">🇿🇲 +260</option>
                                            <option value="+263">🇿🇼 +263</option>
                                            <option value="+258">🇲🇿 +258</option>
                                            <option value="+264">🇳🇦 +264</option>
                                            <option value="+267">🇧🇼 +267</option>
                                            <option value="+266">🇱🇸 +266</option>
                                            <option value="+268">🇸🇿 +268</option>
                                            <option value="+261">🇲🇬 +261</option>
                                            <option value="+230">🇲🇺 +230</option>
                                            <option value="+248">🇸🇨 +248</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+64">🇳🇿 +64</option>
                                            <option value="+675">🇵🇬 +675</option>
                                            <option value="+679">🇫🇯 +679</option>
                                            <option value="+685">🇼🇸 +685</option>
                                            <option value="+676">🇹🇴 +676</option>
                                            <option value="+678">🇻🇺 +678</option>
                                            <option value="+691">🇫🇲 +691</option>
                                            <option value="+692">🇲🇭 +692</option>
                                            <option value="+680">🇵🇼 +680</option>
                                            <option value="+688">🇹🇻 +688</option>
                                            <option value="+682">🇨🇰 +682</option>
                                            <option value="+683">🇳🇺 +683</option>`;

// Files to update (excluding contact page and already updated files)
const FILES_TO_UPDATE = [
    'xline-eco-solvent',
    'apollomax-plus-II',
    'automatic-uv-crystal-flat-pasting',
    'cold-laminator',
    'fulei-bu-1425fa-flatbed-laminator',
    'fulei-bu-1600e-warm-auto-laminator',
    'liyu-x-line-dqs-uv-hybrid-printer',
    'smart-uv-printer',
    'sapphire-heat-press',
    'subli-mate-manual-heat-press',
    'iecho-bk3',
    'iecho-tk4s',
    'smart-sublimation',
    'smart-dtf-machine',
    'dtf-uv-printer-sf303-f1080',
    'gcc-puma-iv',
    'inks',
    '3d-printer',
    'eco-solvent-printers',
    'embroidery-knitting',
    'laser-machine',
    'uv-printers',
    'handheld-fiber-laser',
    'hanniu-k1390-co2-laser-150w-ccd',
    'hanniu-k1390-co2-laser-300w',
    'k-sign-desktop-laser-b330',
    'k-sign-ks-1916-laser-fabric-cutting',
    'k-sign-desktop-laser-marking',
    'reci-handheld-fiber-laser-welding',
    'yueming-fiber-laser-hl1530c-g-e',
    'gcc-ar24-desktop',
    'gcc-expert-24lx',
    'gcc-expert-52lx',
    'sublimation-printer-fd6198e',
    'kirin',
    'r2000-roller',
    'dual-pneumatic',
    'smart-dtf-powder-shaker',
    'dtf-uv-printer-sf604-i3200',
    'promaker-embroidery-1201',
    'promaker-embroidery-1202',
    'promaker-embroidery-1204',
    'smartex-knitting-gsce-1-52',
    'k-sign-letter-shell-3d-printer',
    'yueming-fiber-laser-cma-1325c-g-g',
    'sublimation-dtf',
    'solvent-printers',
    'laminator',
    'heatpress',
    'cutting-machine'
];

function updateCountrySelect(content) {
    // Pattern to match select element with country options
    // Handles both with and without defaultValue attribute
    const selectPattern = /<select[^>]*name="countryCode"[^>]*>\s*(?:<option[^>]*>.*?<\/option>\s*)+<\/select>/gs;

    return content.replace(selectPattern, (match) => {
        // Extract the select opening tag to preserve className and other attributes
        const selectTagMatch = match.match(/<select[^>]*>/);
        if (!selectTagMatch) return match;

        let selectTag = selectTagMatch[0];

        // Ensure defaultValue="+63" is present
        if (!selectTag.includes('defaultValue')) {
            selectTag = selectTag.replace(/>$/, ' defaultValue="+63">');
        } else if (!selectTag.includes('defaultValue="+63"')) {
            selectTag = selectTag.replace(/defaultValue="[^"]*"/, 'defaultValue="+63"');
        }

        return `${selectTag}\n                                        ${COMPLETE_COUNTRY_OPTIONS}\n                                    </select>`;
    });
}

let successCount = 0;
let failCount = 0;
const failedFiles = [];

FILES_TO_UPDATE.forEach(folder => {
    const filePath = path.join(__dirname, 'src', 'app', folder, 'page.js');

    try {
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File not found: ${filePath}`);
            failCount++;
            failedFiles.push(folder);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf8');

        // Check if file has country select
        if (!content.includes('name="countryCode"')) {
            console.log(`⚠️  No countryCode select found in: ${folder}`);
            failCount++;
            failedFiles.push(folder);
            return;
        }

        const updatedContent = updateCountrySelect(content);

        // Only write if content changed
        if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✅ Updated: ${folder}/page.js`);
            successCount++;
        } else {
            console.log(`➖ No changes needed: ${folder}/page.js`);
        }

    } catch (error) {
        console.error(`❌ Error updating ${folder}:`, error.message);
        failCount++;
        failedFiles.push(folder);
    }
});

console.log(`\n========== SUMMARY ==========`);
console.log(`✅ Successfully updated: ${successCount} files`);
console.log(`❌ Failed: ${failCount} files`);
if (failedFiles.length > 0) {
    console.log(`\nFailed files:`);
    failedFiles.forEach(f => console.log(`  - ${f}`));
}
console.log(`\nTotal files processed: ${successCount + failCount}/${FILES_TO_UPDATE.length}`);
