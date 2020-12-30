import * as Sentry from 'sentry-expo';
Sentry.init({
    dsn: "https://e9cbac10a70045c09f16e7a3983237c3@o488440.ingest.sentry.io/5548827",
    enableInExpoDevelopment: true,
    debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});
Sentry.Native.nativeCrash();


export const logcaptureMessageSentry = (msg)=>{
    Sentry.Native.captureMessage(msg);
}

export const logcaptureExceptionSentry = (err)=>{
    Sentry.Native.captureException(err);
}