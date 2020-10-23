var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BPnuyU_oASoJTuJ-KhNsGy2ft5YCvwRjIIRcHEzej-_vd3MgdMjRK7GmyGvhVuRTT4nVc1l8xp6UVeUVsfNSzkc",
    "privateKey": "dW5iOT_mHX97mO6pszPTEDy6tFg_zre8BPxDzVPZjUg"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fJ1d3_9fYxw:APA91bErJlKQ0Js__6izFZxhCH1gAcvcnByO1eXi0i3s3Aof_bx6wRjW5i6SII2yJrC4C8eAOICq6EEW9rApRNQ4Wb_1EjAc5L7xZ-JSO5eWX43A9FA0NKriAzP6k9JmPaAfoKbO13Yb",
    "keys": {
        "p256dh": "BE8l/VfIWK+PjkWVFJkE3RktBTM8J69mK2XcDKcRhxpNVS18+bP8OQFbzMucJ9uzkpD9JmCT1gh3CL9jMLhQTSY=",
        "auth": "i3m03e1gzaaMGeHCuiJNfQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options= {
    gcmAPIKey: '394948343445',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
)
