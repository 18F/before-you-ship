---
title: Framework-Specific Security Guidelines
navtitle: Frameworks
parent: Security
---

### Django

* Set up [static security analysis](../static-analysis/#python).
* Read through the official [deployment checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/).

See also:

* [OWASP Django Secure Configuration Guide](https://www.owasp.org/index.php/SCG_WF_Django)

### Rails

* Set up [static security analysis](../static-analysis/#rails).
* Read through [Secure Rails](https://github.com/ankane/secure_rails).
* If you're doing authorization, make sure that it is applied to all controller actions. Instructions:
    * [CanCan](https://github.com/ryanb/cancan#4-lock-it-down).
    * [Pundit](https://github.com/elabs/pundit#ensuring-policies-and-scopes-are-used)

More info:

* [Rails Security Guide](http://guides.rubyonrails.org/security.html)
* [OWASP Rails Cheatsheet](https://www.owasp.org/index.php/Ruby_on_Rails_Cheatsheet)

---

Are we missing guidelines for the framework you're using? [Open an issue!](https://github.com/18F/before-you-ship/issues/new)
