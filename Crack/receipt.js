/*
Quantumult X 脚本:
Unlocks 公众号：墨鱼手记
[rewrite_local]
#Unlocks
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/receipt.js
[mitm]
hostname = buy.itunes.apple.com,
*/

var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

# > 剪影
if(bundle_id == "com.mediaeditor.video")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1000000000,"app_item_id":1000000000,"bundle_id":"com.mediaeditor.video","application_version":"437","download_id":99999999999999,"version_external_identifier":999999999,"receipt_creation_date":"2111-11-1111:11:11Etc\\/GMT","receipt_creation_date_ms":"4476655324000","receipt_creation_date_pst":"2111-11-1111:11:11America\\/Los_Angeles","request_date":"2011-11-1111:11:11Etc\\/GMT","request_date_ms":"1555555555555","request_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_purchase_date":"2011-11-1111:11:11Etc\\/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_application_version":"433","in_app":[{"quantity":"1","product_id":"yearautorenew","transaction_id":"520000631442654","original_transaction_id":"520000631442654","purchase_date":"2011-11-1111:11:11Etc\\/GMT","purchase_date_ms":"1555555555555","purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_purchase_date":"2011-11-1111:11:11Etc\\/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","expires_date":"2111-11-1111:11:11Etc\\/GMT","expires_date_ms":"4476655324000","expires_date_pst":"2111-11-1111:11:11America\\/Los_Angeles","web_order_line_item_id":"520000240955544","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"yearautorenew","transaction_id":"520000631442654","original_transaction_id":"520000631442654","purchase_date":"2011-11-1111:11:11Etc\\/GMT","purchase_date_ms":"1555555555555","purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","original_purchase_date":"2011-11-1111:11:11Etc\\/GMT","original_purchase_date_ms":"1555555555555","original_purchase_date_pst":"2011-11-1111:11:11America\\/Los_Angeles","expires_date":"2111-11-1111:11:11Etc\\/GMT","expires_date_ms":"4476655324000","expires_date_pst":"2111-11-1111:11:11America\\/Los_Angeles","web_order_line_item_id":"520000000000000","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"99999999"}],"latest_receipt":"5L2c6ICFQGtpbmc=","pending_renewal_info":[{"auto_renew_product_id":"yearautorenew","original_transaction_id":"520000000000000","product_id":"yearautorenew","auto_renew_status":"1"}]};
}

# > RCam
if(bundle_id == "com.mm.RCam")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1438439519,"app_item_id":1438439519,"bundle_id":"com.mm.RCam","application_version":"2.2.2","download_id":70068605698208,"version_external_identifier":835181038,"receipt_creation_date":"2020-08-21 04:27:52 Etc/GMT","receipt_creation_date_ms":"1597984072000","receipt_creation_date_pst":"2020-08-20 21:27:52 America/Los_Angeles","request_date":"2020-08-25 11:47:55 Etc/GMT","request_date_ms":"1598356075316","request_date_pst":"2020-08-25 04:47:55 America/Los_Angeles","original_purchase_date":"2020-08-21 02:06:34 Etc/GMT","original_purchase_date_ms":"1597975594000","original_purchase_date_pst":"2020-08-20 19:06:34 America/Los_Angeles","original_application_version":"2.2.2","in_app":[{"quantity":"1","product_id":"com.mm.RCam.product1","transaction_id":"300000654923513","original_transaction_id":"300000654923513","purchase_date":"2020-08-21 04:27:50 Etc/GMT","purchase_date_ms":"1597984070000","purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","original_purchase_date":"2020-08-21 04:27:50 Etc/GMT","original_purchase_date_ms":"1597984070000","original_purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","expires_date":"2029-10-10 17:10:10 Etc/GMT","expires_date_ms":"1886346610000","expires_date_pst":"2029-10-10 10:10:10 America/Los_Angeles","web_order_line_item_id":"300000257306796","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"com.mm.RCam.product1","transaction_id":"300000654923513","original_transaction_id":"300000654923513","purchase_date":"2020-08-21 04:27:50 Etc/GMT","purchase_date_ms":"1597984070000","purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","original_purchase_date":"2020-08-21 04:27:50 Etc/GMT","original_purchase_date_ms":"1597984070000","original_purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","expires_date":"2029-10-10 17:10:10 Etc/GMT","expires_date_ms":"1886346610000","expires_date_pst":"2029-10-10 10:10:10 America/Los_Angeles","web_order_line_item_id":"300000257306796","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"20482137"}],"latest_receipt":"","pending_renewal_info":[{"expiration_intent":"1","auto_renew_product_id":"com.mm.RCam.product1","original_transaction_id":"300000654923513","is_in_billing_retry_period":"0","product_id":"com.mm.RCam.product1","auto_renew_status":"0"}]};
}

# > Picsew
if(bundle_id == "com.sugarmo.ScrollClip")
{
obj = {"receipt":{"receipt_type":"Production","adam_id":0,"app_item_id":0,"bundle_id":"com.sugarmo.ScrollClip","application_version":"3061","download_id":0,"version_external_identifier":0,"receipt_creation_date":"2020-01-01 00:00:00 Etc/GMT","receipt_creation_date_ms":"1588000000000","receipt_creation_date_pst":"2020-04-27 21:10:15 America/Los_Angeles","request_date":"2020-01-01 00:00:00 Etc/GMT","request_date_ms":"1588000000000","request_date_pst":"2020-01-01 00:00:00 America/Los_Angeles","original_purchase_date":"2001-01-01 00:00:00 Etc/GMT","original_purchase_date_ms":"1576200000000","original_purchase_date_pst":"2020-01-01 00:00:00 America/Los_Angeles","original_application_version":"3037","in_app":[{"quantity":"1","product_id":"com.sugarmo.ScrollClip.pro","transaction_id":"1000000000000000","original_transaction_id":"1000000000000000","purchase_date":"2020-01-01 00:00:00 Etc/GMT","purchase_date_ms":"1587700000000","purchase_date_pst":"2020-01-21 00:00:00 America/Los_Angeles","original_purchase_date":"2020-01-01 00:00:00 Etc/GMT","original_purchase_date_ms":"1587700000000","original_purchase_date_pst":"2020-01-01 00:00:00 America/Los_Angeles","is_trial_period":"false"}]},"status":0,"environment":"Production"};
}

# > Gear 20200902 修改
if(bundle_id == "com.gear.app")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1000000000,"app_item_id":1000000000,"bundle_id":"com.gear.app","application_version":"2.0.8.0","download_id":60000000000000,"version_external_identifier":800000000,"receipt_creation_date":"2100-01-01 01:01:01 Etc/GMT","receipt_creation_date_ms":"4102489858000","receipt_creation_date_pst":"2100-01-01 01:01:01 America/Los_Angeles","request_date":"2100-01-01 01:01:01 Etc/GMT","request_date_ms":"1590000000000","request_date_pst":"2020-06-05 01:01:01 America/Los_Angeles","original_purchase_date":"2020-04-18 08:31:54 Etc/GMT","original_purchase_date_ms":"1500000000000","original_purchase_date_pst":"2020-01-01 01:01:01 America/Los_Angeles","original_application_version":"1.8.12.0","in_app":[{"quantity":"1","product_id":"com.gear.app.yearly","transaction_id":"280000000000000","original_transaction_id":"280000000000000","purchase_date":"2020-01-01 01:01:01 Etc/GMT","purchase_date_ms":"1500000000000","purchase_date_pst":"2020-01-01 01:01:01 America/Los_Angeles","original_purchase_date":"2020-01-01 01:01:01 Etc/GMT","original_purchase_date_ms":"1500000000000","original_purchase_date_pst":"2020-01-01 01:01:01 America/Los_Angeles","expires_date":"2100-01-01 01:01:01 Etc/GMT","expires_date_ms":"4102489858000","expires_date_pst":"2100-01-01 01:01:01 America/Los_Angeles","web_order_line_item_id":"280000000000000","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"com.gear.app.yearly","transaction_id":"280000000000000","original_transaction_id":"280000000000000","purchase_date":"2020-01-01 01:01:01 Etc/GMT","purchase_date_ms":"1500000000000","purchase_date_pst":"2020-01-01 01:01:01 America/Los_Angeles","original_purchase_date":"2020-01-01 01:01:01 Etc/GMT","original_purchase_date_ms":"1500000000000","original_purchase_date_pst":"2100-01-01 01:01:01 America/Los_Angeles","expires_date":"2100-01-01 01:01:01 Etc/GMT","expires_date_ms":"4102489858000","expires_date_pst":"2100-01-01 01:01:01 America/Los_Angeles","web_order_line_item_id":"280000000000000","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"20000000"}],"latest_receipt":"","pending_renewal_info":[{"expiration_intent":"1","auto_renew_product_id":"com.gear.app.yearly","original_transaction_id":"280000000000000","is_in_billing_retry_period":"0","product_id":"com.gear.app.yearly","auto_renew_status":"0"}]};
}

# > Geist
if(bundle_id == "com.firecore.infuse")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1000000000,"app_item_id":1000000000,"bundle_id":"com.firecore.infuse","application_version":"6.4.3073","download_id":60000000000000,"version_external_identifier":800000000,"receipt_creation_date":"2000-01-01 01:01:01 Etc/GMT","receipt_creation_date_ms":"1000000000000","receipt_creation_date_pst":"2000-01-01 01:01:01 America/Los_Angeles","request_date":"2000-01-01 01:01:01 Etc/GMT","request_date_ms":"1000000000000","request_date_pst":"2000-01-01 01:01:01 America/Los_Angeles","original_purchase_date":"2000-01-01 01:01:01 Etc/GMT","original_purchase_date_ms":"1588186076000","original_purchase_date_pst":"2020-04-29 11:47:56 America/Los_Angeles","original_application_version":"6.3.3026","in_app":[{"quantity":"1","product_id":"com.firecore.infuse.pro.365.special","transaction_id":"200000000000000","original_transaction_id":"200000000000000","purchase_date":"2000-01-01 01:01:01 Etc/GMT","purchase_date_ms":"1000000000000","purchase_date_pst":"2000-01-01 01:01:01 America/Los_Angeles","original_purchase_date":"2000-01-01 01:01:01 Etc/GMT","original_purchase_date_ms":"1000000000000","original_purchase_date_pst":"2000-01-01 01:01:01 America/Los_Angeles","expires_date":"2100-01-01 01:01:01 Etc/GMT","expires_date_ms":"4000000000000","expires_date_pst":"2100-01-01 01:01:01 America/Los_Angeles","web_order_line_item_id":"200000000000000","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"com.firecore.infuse.pro.365.special","transaction_id":"200000000000000","original_transaction_id":"200000000000000","purchase_date":"2000-01-01 01:01:01 Etc/GMT","purchase_date_ms":"1000000000000","purchase_date_pst":"2000-01-01 01:01:01 America/Los_Angeles","original_purchase_date":"2000-01-01 01:01:01 Etc/GMT","original_purchase_date_ms":"1000000000000","original_purchase_date_pst":"2000-01-01 01:01:01 America/Los_Angeles","expires_date":"2021-04-29 18:51:04 Etc/GMT","expires_date_ms":"4000000000000","expires_date_pst":"2100-01-01 01:01:01 America/Los_Angeles","web_order_line_item_id":"200000000000000","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"20000000"}],"latest_receipt":"","pending_renewal_info":[{"auto_renew_product_id":"com.firecore.infuse.pro.365.special","original_transaction_id":"200000000000000","product_id":"com.firecore.infuse.pro.365.special","auto_renew_status":"0"}]};
}

$done({body: JSON.stringify(obj)});
