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
* Jacob Kaplan-Moss' talk: [Python vs. the OWASP Top 10](https://www.youtube.com/watch?v=sra9x44lXgU) ([slides](https://speakerdeck.com/jacobian/python-vs-the-owasp-top-10))


### Flask

* Set up [static security analysis](../static-analysis/#python)
* Read through the [official security docs](http://flask.pocoo.org/docs/security/)
* Consider using [Flask-Security](https://pythonhosted.org/Flask-Security/)

See also:

* Jacob Kaplan-Moss' talk: [Python vs. the OWASP Top 10](https://www.youtube.com/watch?v=sra9x44lXgU) ([slides](https://speakerdeck.com/jacobian/python-vs-the-owasp-top-10))



### Rails

* Set up [static security analysis](../static-analysis/#rails).
* Read through [Secure Rails](https://github.com/ankane/secure_rails).
* If you need authorization, consider using the gems listed below. Use the linked instructions to ensure you have authorization applied to all appropriate controller actions.
    * [CanCanCan](https://github.com/CanCanCommunity/cancancan#4-lock-it-down)
    * [Pundit](https://github.com/elabs/pundit#ensuring-policies-and-scopes-are-used)

More info:

* [Rails Security Guide](http://guides.rubyonrails.org/security.html)
* [OWASP Rails Cheatsheet](https://www.owasp.org/index.php/Ruby_on_Rails_Cheatsheet)

### Sinatra/Padrino

* Set up [static security analysis](../static-analysis/#other-ruby-frameworks). We are currently seeking recommendations for this configuration.
* Ensure that [rack-protection](https://github.com/sinatra/rack-protection) and/or [SecureHeaders](https://github.com/twitter/secureheaders) is enabled and configured.

More info:

* [Rails Security Guide](http://guides.rubyonrails.org/security.html) is not directly related, but contains pertinent information and descriptions of common vulnerabilities.

---

Are we missing guidelines for the framework you're using, or think our guidelines could be improved? [Open an issue!](https://github.com/18F/before-you-ship/issues/new)
