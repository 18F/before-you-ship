All 18F systems requiring authentication **must** use multiple factors. Examples of multi-factor authentication (MFA) include, but are not limited to:

* **GSA SecureAuth**: Comes with its own MFA system, using either emails, texts, or phone calls with an automated voice providing the token number. This is the most common option.

* **OMB Max**: A cross-agency [single-sign-on service](https://login.max.gov/cas/login?service=https%3A%2F%2Fmax.gov%2Fmaxportal%2Fsa%2Flogin.action). Sometimes used by other agencies as their authentication system of choice. Requires either a password or Personal Identity Verification (PIV) card, with a text message (SMS) serving as the additional authentication factor. Note the SMS service is still in `beta`.

* **cloud.gov identity provider**: a basic identity provider (IdP) that other agencies may use when they don't have their own single-sign-on platform. Uses mobile apps that support a one-time-password (OTP) implementation, like [Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator), as its second authentication factor.

Systems in the [pre-assessment](../ato/types/#conditions-for-pre-assessment) phase do not require MFA. 
