---
title: Framework-Specific Security Guidelines
navtitle: Frameworks
parent: Security
redirect_to: https://handbook.tts.gsa.gov/security/#frameworks
---

Organized by language.

### [Node.js](https://nodejs.org/)

* See info on JavaScript [static security analysis](../static-analysis/#recommendations-by-language)

#### [Express](https://expressjs.com/)

* [Express Production Best Practices: Security](https://expressjs.com/en/advanced/best-practice-security.html)

#### [Sails](http://sailsjs.org/)

* [Sails Security](http://sailsjs.org/documentation/concepts/security)

### [Python](https://www.python.org/)

#### [Django](https://www.djangoproject.com/)

* Set up [static security analysis](../static-analysis/#recommendations-by-language).
* Read through the official [deployment checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/).

See also:

* [OWASP Django Secure Configuration Guide](https://www.owasp.org/index.php/SCG_WF_Django)
* Search [this deck](https://speakerdeck.com/mpirnat/shiny-lets-be-bad-guys-exploiting-and-mitigating-the-top-10-web-app-vulnerabilities-oscon-2016-edition) (click "Download PDF") for "Django"
* Jacob Kaplan-Moss' talk: [Python vs. the OWASP Top 10](https://www.youtube.com/watch?v=sra9x44lXgU) ([slides](https://speakerdeck.com/jacobian/python-vs-the-owasp-top-10))
* [Security in Django](https://docs.djangoproject.com/en/1.10/topics/security/)

#### [Flask](http://flask.pocoo.org/)

* Set up [static security analysis](../static-analysis/#recommendations-by-language)
* Read through the [official security docs](http://flask.pocoo.org/docs/security/)
* Consider using [Flask-Security](https://pythonhosted.org/Flask-Security/)

See also:

* Search [this deck](https://speakerdeck.com/mpirnat/shiny-lets-be-bad-guys-exploiting-and-mitigating-the-top-10-web-app-vulnerabilities-oscon-2016-edition) (click "Download PDF") for "Flask"
* Jacob Kaplan-Moss' talk: [Python vs. the OWASP Top 10](https://www.youtube.com/watch?v=sra9x44lXgU) ([slides](https://speakerdeck.com/jacobian/python-vs-the-owasp-top-10))

### [Ruby](https://www.ruby-lang.org/)

#### [Rails](http://rubyonrails.org/)

* Set up [static security analysis](../static-analysis/#recommendations-by-language).
* Read through [Secure Rails](https://github.com/ankane/secure_rails).
* If you need authorization, consider using the gems listed below. Use the linked instructions to ensure you have authorization applied to all appropriate controller actions.
    * [CanCanCan](https://github.com/CanCanCommunity/cancancan#4-lock-it-down)
    * [Pundit](https://github.com/elabs/pundit#ensuring-policies-and-scopes-are-used)

More info:

* [Rails Security Guide](http://guides.rubyonrails.org/security.html)
* [OWASP Rails Cheatsheet](https://www.owasp.org/index.php/Ruby_on_Rails_Cheatsheet)

#### [Sinatra](http://www.sinatrarb.com/)/[Padrino](http://padrinorb.com/)

* Set up [static security analysis](../static-analysis/#recommendations-by-language). We are currently seeking recommendations for this configuration.
* Ensure that [rack-protection](https://github.com/sinatra/rack-protection) and/or [SecureHeaders](https://github.com/twitter/secureheaders) is enabled and configured.

More info:

* [Rails Security Guide](http://guides.rubyonrails.org/security.html) is not directly related, but contains pertinent information and descriptions of common vulnerabilities.

---

Are we missing guidelines for the framework you're using, or think our guidelines could be improved? [Open an issue!](https://github.com/18F/before-you-ship/issues/new)
