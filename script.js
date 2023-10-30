let answeredQuestions = 0;
let correctPercentage = 0;
let userCorrectAnswers = 0;

const questionData = [
{
    id: 1,
    question: "Welches Modell liegt dem in BSI-Standard 200-1 beschriebenen Sicherheitsprozess zugrunde?",
    choices: [
        "ein Zyklus aus den Schritten Plan, Do, Check und Act ",
        "ein Verfahren zur Definition eines State-of-the-Art-Informationssicherheitsniveaus",
        "ein auf stetige Verbesserung angelegtes Modell ",
        "ein Modell aus technischen Sicherheitsmaßnahmen"
    ],
    correctAnswers: [1, 3], // Correct answers are options number 1 and 3 (starting from 1)
    explanation: "Im BSI-Standard 200-1 liegt dem Sicherheitsprozess ein Zyklus aus den Schritten Plan, Do, Check und Act zugrunde. Dieses Modell ist auf stetige Verbesserung angelegt."
},{
    id: 2,
    question: "Was sollte eine Leitlinie zur Informationssicherheit enthalten?",
    choices: [
        "detaillierte technische Vorgaben für die Konfiguration wichtiger IT-Systeme",
        "Aussagen zur Bedeutung der Informationssicherheit für die betroffene Institution ",
        "grundlegende Regelungen zur Organisation der Informationssicherheit ",
        "konkrete Verhaltensregelungen für den Umgang mit vertraulichen Informationen"
    ],
    correctAnswers: [2, 3], // Correct answers are options number 2 and 3 (starting from 1)
    explanation: "Eine Leitlinie zur Informationssicherheit sollte Aussagen zur Bedeutung der Informationssicherheit für die betroffene Institution enthalten sowie grundlegende Regelungen zur Organisation der Informationssicherheit."
},{
    id: 3,
    question: "Welche Aufgaben haben üblicherweise Informationssicherheitsbeauftragte?",
    choices: [
        "die Entwicklung von Sicherheitskonzepten zu koordinieren ",
        "die eingesetzte Sicherheitstechnik zu konfigurieren",
        "der Leitungsebene über den Stand der Informationssicherheit zu berichten ",
        "Presseanfragen zum den Stand der Informationssicherheit im Unternehmen zu beantworten"
    ],
    correctAnswers: [1, 3], // Correct answers are options number 1 and 3 (starting from 1)
    explanation: "Informationssicherheitsbeauftragte haben üblicherweise Aufgaben wie die Koordination der Entwicklung von Sicherheitskonzepten und das Berichten über den Stand der Informationssicherheit an die Leitungsebene."
},{
    id: 4,
    question: "Wie setzt sich ein IS-Management-Team geeignet zusammen?",
    choices: [
        "Aus jeder Abteilung des Unternehmens oder der Behörde werden Mitarbeiter entsandt, damit alle Bereiche gut vertreten sind.",
        "Nur der IT-Leiter ordnet einige Mitarbeiter in das Team ab.",
        "Die Zusammensetzung sollte auf Freiwilligkeit beruhen. Jeder der Interesse hat, wird aufgenommen.",
        "Die Geschäftsleitung setzt das Team aus Verantwortlichen für bestimmte IT-Systeme, Anwendungen, Datenschutz und IT-Service und (sofern vorhanden) dem ICS-ISB zusammen. "
    ],
    correctAnswers: [4], // Correct answer is option number 4 (starting from 1)
    explanation: "Ein geeignetes IS-Management-Team setzt sich aus Verantwortlichen für bestimmte IT-Systeme, Anwendungen, Datenschutz und IT-Service sowie dem ICS-ISB (sofern vorhanden) zusammen. Diese Zusammensetzung gewährleistet eine umfassende Abdeckung der relevanten Bereiche."
},{
    id: 5,
    question: "Wer ist für die Freigabe der Leitlinie zur Informationssicherheit verantwortlich?",
    choices: [
        "das IS-Management-Team",
        "der ISB",
        "die Unternehmens- oder Behördenleitung ",
        "die Öffentlichkeitsabteilung eines Unternehmens oder einer Behörde"
    ],
    correctAnswers: [3], // Correct answer is option number 3 (starting from 1)
    explanation: "Die Freigabe der Leitlinie zur Informationssicherheit ist in der Regel die Verantwortung der Unternehmens- oder Behördenleitung. Diese Ebene trägt die finale Verantwortung für die Informationssicherheit und muss die Leitlinie freigeben, um ihre Gültigkeit zu erhalten."
},{
    id: 6,
    question: "Warum kann es sinnvoll sein, sich für eine Sicherheitskonzeption gemäß der Basis-Absicherung zu entscheiden?",
    choices: [
        "Die Erfüllung der zugehörigen Anforderungen reicht in der Regel für ein normales Unternehmen völlig aus.",
        "Weil schnell Informationssicherheit umgesetzt werden muss und die Basis-Absicherung hierfür einen geeigneten Einstieg bietet. ",
        "Weil Informationssicherheit Schritt für Schritt umgesetzt werden soll. Mittelfristig kann das Sicherheitskonzept nach Standard-Absicherung ausgebaut werden. ",
        "Weil die hochwertigen Informationen dringend geschützt werden müssen. Die Basis-Absicherung sorgt für den angemessenen Schutz der „Kronjuwelen“ einer Institution."
    ],
    correctAnswers: [2, 3], // Correct answers are options number 2 and 3 (starting from 1)
    explanation: "Es kann sinnvoll sein, sich für eine Sicherheitskonzeption gemäß der Basis-Absicherung zu entscheiden, weil sie einen geeigneten Einstieg bietet, um Informationssicherheit schnell umzusetzen. Zudem ermöglicht sie eine schrittweise Umsetzung, die mittelfristig nach Standard-Absicherung ausgebaut werden kann."
},{
    id: 7,
    question: "Welche klassischen Schutzziele werden bei der Schutzbedarfsfeststellung gemäß IT-Grundschutz empfohlen?",
    choices: [
        "Authentizität",
        "Verfügbarkeit ",
        "Vertraulichkeit ",
        "Integrität "
    ],
    correctAnswers: [2, 3, 4], // Correct answers are options number 2, 3, and 4 (starting from 1)
    explanation: "Bei der Schutzbedarfsfeststellung gemäß IT-Grundschutz werden die klassischen Schutzziele Verfügbarkeit, Vertraulichkeit und Integrität empfohlen. Diese Schutzziele sind grundlegend für die Informationssicherheit und dienen als Orientierung für die Sicherheitsmaßnahmen."
},{
    id: 8,
    question: "In welchen Fällen können Sie gemäß IT-Grundschutz-Methodik auf die Schutzbedarfsfeststellung für ein IT-System verzichten?",
    choices: [
        "wenn das IT-System spätestens innerhalb von 18 Monaten ausgesondert wird",
        "wenn das IT-System nicht eingesetzt wird ",
        "wenn die Anwendungen, die es unterstützt, nur einen normalen Schutzbedarf haben",
        "wenn der Schutzbedarf bereits im Rahmen einer vor einem Jahr durchgeführten Revision festgestellt wurde"
    ],
    correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
    explanation: "Gemäß der IT-Grundschutz-Methodik können Sie auf die Schutzbedarfsfeststellung für ein IT-System verzichten, wenn das IT-System nicht eingesetzt wird. In diesem Fall ist keine Schutzbedarfsfeststellung erforderlich, da das System nicht aktiv genutzt wird."
},{
    id: 9,
    question: "Welche Kriterien berücksichtigen Sie bei der Bestimmung des Bedarfs an Verfügbarkeit eines IT-Systems?",
    choices: [
        "die maximal tolerierbare Ausfallzeit des IT-Systems ",
        "den Aufwand, der erforderlich ist, um das IT-System nach einer Beschädigung wiederherzustellen",
        "die Anzahl der Benutzer des IT-Systems",
        "die Anschaffungskosten des IT-Systems"
    ],
    correctAnswers: [1], // Correct answer is option number 1 (starting from 1)
    explanation: "Bei der Bestimmung des Bedarfs an Verfügbarkeit eines IT-Systems berücksichtigen Sie die maximal tolerierbare Ausfallzeit des IT-Systems. Dieses Kriterium gibt an, wie lange das System höchstens ausfallen darf, ohne dass es zu erheblichen Beeinträchtigungen kommt."
},{
    id: 10,
    question: "Was berücksichtigen Sie, wenn Sie den Schutzbedarf einer Anwendung bestimmen?",
    choices: [
        "die Informationen, die im Zusammenhang mit der Anwendung verwendet werden ",
        "die Bedeutung der Anwendung für die Geschäftsprozesse oder Fachaufgaben ",
        "die relevanten Gefährdungen, denen die Anwendung ausgesetzt ist",
        "die räumliche Umgebung des IT-Systems, das die Anwendung bereitstellt"
    ],
    correctAnswers: [1, 2], // Correct answers are options number 1 and 2 (starting from 1)
    explanation: "Beim Bestimmen des Schutzbedarfs einer Anwendung berücksichtigen Sie die Informationen, die im Zusammenhang mit der Anwendung verwendet werden, sowie die Bedeutung der Anwendung für die Geschäftsprozesse oder Fachaufgaben. Diese Kriterien helfen dabei, den angemessenen Schutzbedarf für die Anwendung festzulegen."
},{
    id: 11,
    question: "Unter welchen Bedingungen kann der Schutzbedarf eines IT-Systems bezüglich Verfügbarkeit geringer sein als derjenige der Anwendungen, für die es eingesetzt wird?",
    choices: [
        "wenn der Buchwert des IT-Systems einen zuvor definierten Schwellwert unterschreitet",
        "wenn das IT-System nur solche Teile der Anwendungen bedient, die einen geringeren Schutzbedarf haben ",
        "wenn mindestens ein weiteres redundantes IT-System in Betrieb ist, das die betreffenden Anwendungen bereitstellen kann ",
        "wenn die Anwendungen innerhalb der nächsten drei Monate so umstrukturiert werden sollen, dass das betreffende IT-System nicht mehr benötigt wird"
    ],
    correctAnswers: [2, 3], // Correct answers are options number 2 and 3 (starting from 1)
    explanation: "Der Schutzbedarf eines IT-Systems bezüglich Verfügbarkeit kann geringer sein als derjenige der Anwendungen, für die es eingesetzt wird, wenn das IT-System nur solche Teile der Anwendungen bedient, die einen geringeren Schutzbedarf haben. Zudem kann der Schutzbedarf geringer sein, wenn mindestens ein weiteres redundantes IT-System in Betrieb ist, das die betreffenden Anwendungen bereitstellen kann."
},{
    id: 12,
    question: "Wenn bei der Schutzbedarfsfeststellung für ein IT-System Kumulationseffekte berücksichtigt werden, bedeutet dies, dass …",
    choices: [
        "… sich der Schutzbedarf des IT-Systems erhöht, weil sich Einzelschäden zu einem höheren Gesamtschaden addieren. ",
        "… sich der Schutzbedarf des IT-Systems verringert, weil geeignete, sich gegenseitig verstärkende Sicherheitsmaßnahmen im Einsatz sind.",
        "… sich der für das IT-System festgestellte Schutzbedarf auch auf den Schutzbedarf anderer IT-Systeme auswirkt, die mit dem betreffenden IT-System vernetzt sind.",
        "… der Schutzbedarf des IT-Systems erst festgestellt werden kann, wenn der Schutzbedarf der mit diesem vernetzten IT-Systeme festgestellt ist."
    ],
    correctAnswers: [1], // Correct answer is option number 1 (starting from 1)
    explanation: "Wenn bei der Schutzbedarfsfeststellung für ein IT-System Kumulationseffekte berücksichtigt werden, bedeutet dies, dass sich der Schutzbedarf des IT-Systems erhöht, weil sich Einzelschäden zu einem höheren Gesamtschaden addieren. Kumulationseffekte führen zu einem höheren Schutzbedarf, da die Auswirkungen von Schäden in Verbindung betrachtet werden."
},{
    id: 13,
    question: "Welche Aufgaben stellen sich Ihnen bei der Modellierung gemäß IT-Grundschutz?",
    choices: [
        "Sie bilden den in der Strukturanalyse dokumentierten Informationsverbund mithilfe der IT-Grundschutz-Bausteine ab. ",
        "Sie entwerfen die Sicherheitsarchitektur des betrachteten Informationsverbundes.",
        "Sie merken Zielobjekte, die nicht geeignet modelliert werden können, für eine Risikoanalyse vor. ",
        "Sie prüfen, welche IT-Grundschutz-Bausteine für den betrachteten Informationsverbund relevant sind. "
    ],
    correctAnswers: [1, 3, 4], // Correct answers are options number 1, 3, and 4 (starting from 1)
    explanation: "Bei der Modellierung gemäß IT-Grundschutz bilden Sie den in der Strukturanalyse dokumentierten Informationsverbund mithilfe der IT-Grundschutz-Bausteine ab. Außerdem merken Sie Zielobjekte, die nicht geeignet modelliert werden können, für eine Risikoanalyse vor. Zusätzlich prüfen Sie, welche IT-Grundschutz-Bausteine für den betrachteten Informationsverbund relevant sind, um eine angemessene Sicherheitsmodellierung zu gewährleisten."
},{
    id: 14,
    question: "Welche Informationen sind Bestandteil eines IT-Grundschutz-Bausteins?",
    choices: [
        "Angaben zur spezifischen Gefährdungslage ",
        "Beschreibungen zu Standard-Sicherheitsmaßnahmen",
        "Verweise auf weiterführende Informationen ",
        "Sicherheitsanforderungen zu einem gegebenen Sachverhalt "
    ],
    correctAnswers: [1, 3, 4], // Correct answers are options number 1, 3, and 4 (starting from 1)
    explanation: "Ein IT-Grundschutz-Baustein enthält Angaben zur spezifischen Gefährdungslage, Sicherheitsanforderungen zu einem gegebenen Sachverhalt und Verweise auf weiterführende Informationen. Es bietet somit umfassende Informationen zur Sicherheitsmodellierung und zur Umsetzung von Sicherheitsmaßnahmen."
},{
    id: 15,
    question: "Welche Aufgaben stellen sich Ihnen, nachdem Sie bei der Modellierung festgelegt haben, welche Bausteine für den Informationsverbund und seine einzelnen Zielobjekte anzuwenden sind?",
    choices: [
        "die Festlegung von Maßnahmen, mit denen die Anforderungen erfüllt werden können ",
        "die Prüfung, ob für einzelne Anforderungen, deren Umsetzung im gegebenen Anwendungskontext mit vertretbarem Aufwand nicht möglich ist, Alternativen erforderlich sind ",
        "die Korrektur der Schutzbedarfsfeststellung für Zielobjekte, bei denen die Erfüllung der Anforderungen unrealistisch erscheint",
        "die Dokumentation der Ergebnisse der Modellierung "
    ],
    correctAnswers: [1, 2, 4], // Correct answers are options number 1, 2, and 4 (starting from 1)
    explanation: "Nach der Modellierung legen Sie Maßnahmen fest, um die Anforderungen zu erfüllen, prüfen, ob für Anforderungen, deren Umsetzung mit vertretbarem Aufwand nicht möglich ist, Alternativen erforderlich sind, und dokumentieren die Ergebnisse der Modellierung. Diese Aufgaben gewährleisten eine angemessene Umsetzung der Sicherheitsanforderungen und dienen der Dokumentation und Nachvollziehbarkeit des Sicherheitskonzepts."
},{
    id: 16,
    question: "Worauf sollten Sie bei der Auswahl und Anpassung der Sicherheitsmaßnahmen auf Basis der Anforderungen achten?",
    choices: [
        "auf die Wirtschaftlichkeit der Maßnahmen ",
        "auf die Wirksamkeit der Maßnahmen ",
        "auf den Innovationsgrad der Maßnahmen",
        "auf die Praktikabilität der Maßnahmen "
    ],
    correctAnswers: [1, 2, 4], // Correct answers are options number 1, 2, and 4 (starting from 1)
    explanation: "Bei der Auswahl und Anpassung von Sicherheitsmaßnahmen sollten Sie auf die Wirtschaftlichkeit, Wirksamkeit und Praktikabilität der Maßnahmen achten. Die Maßnahmen sollten effektiv sein, ökonomisch vertretbar und praktisch umsetzbar. Der Innovationsgrad spielt ebenfalls eine Rolle, jedoch sind vor allem die genannten Kriterien entscheidend für die Auswahl und Anpassung von Sicherheitsmaßnahmen."
},{
    id: 17,
    question: "Welche Aussagen zur Anwendung von Bausteinen auf Server sind korrekt?",
    choices: [
        "Der Baustein SYS.1.1 Allgemeiner Server ist nur dann anzuwenden, wenn es keinen betriebssystemspezifischen Baustein für einen Server gibt.",
        "Neben dem Baustein SYS.1.1 Allgemeiner Server ist immer auch der zutreffende betriebssystemspezifische Baustein anzuwenden. ",
        "Wenn es spezielle Bausteine für Server-Anwendungen (z. B. Web- oder Datenbankserver) gibt, muss der betriebssystemspezifische Baustein nicht angewendet werden.",
        "Für Virtualisierungsserver müssen neben dem Baustein sowohl der Baustein SYS.1.1 Allgemeiner Server als auch der zutreffende betriebssystemspezifische Baustein angewendet werden. "
    ],
    correctAnswers: [2, 4], // Correct answers are options number 2 and 4 (starting from 1)
    explanation: "Bei der Anwendung von Bausteinen auf Server ist immer neben dem Baustein SYS.1.1 Allgemeiner Server auch der zutreffende betriebssystemspezifische Baustein anzuwenden. Zusätzlich müssen für Virtualisierungsserver sowohl der Baustein SYS.1.1 Allgemeiner Server als auch der zutreffende betriebssystemspezifische Baustein angewendet werden, um eine umfassende Sicherheitsabdeckung zu gewährleisten."
},{
    id: 18,
    question: "Auf welche Zielobjekte ist bei der Modellierung der Baustein ISMS.1 Sicherheitsmanagement anzuwenden?",
    choices: [
        "Er MUSS gesondert auf jeden größeren Standort eines Informationsverbundes angewendet werden.",
        "Er MUSS einmal angewendet werden, und zwar auf den gesamten Informationsverbund. ",
        "Er ist nur relevant, wenn der Informationsverbund eine gewisse Mindestgröße hat.",
        "Er MUSS für jedes Teilnetz gesondert angewendet werden, das bei der Strukturanalyse identifiziert wurde."
    ],
    correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
    explanation: "Der Baustein ISMS.1 Sicherheitsmanagement muss einmal angewendet werden und zwar auf den gesamten Informationsverbund. Er ist nicht auf spezifische Standorte oder Teilnetze beschränkt, sondern gilt für den gesamten Informationsverbund."
},{
    id: 19,
    question: "Welche Aussagen zum IT-Grundschutz-Check sind zutreffend?",
    choices: [
        "Ein IT-Grundschutz-Check ermöglicht, Defizite bei der Erfüllung von Sicherheitsanforderungen zu ermitteln. ",
        "Bei einem IT-Grundschutz-Check wird lediglich die Erfüllung der Basis-Anforderungen geprüft.",
        "Ein IT-Grundschutz-Check dient dazu, Sicherheitsprobleme zu identifizieren, die in einer Risikoanalyse genauer untersucht werden müssen.",
        "Ein IT-Grundschutz-Check ist ein Soll-Ist-Vergleich zwischen Sicherheitsanforderungen und tatsächlich umgesetzten Sicherheitsmaßnahmen. "
    ],
    correctAnswers: [1, 4], // Correct answers are options number 1 and 4 (starting from 1)
    explanation: "Ein IT-Grundschutz-Check ermöglicht, Defizite bei der Erfüllung von Sicherheitsanforderungen zu ermitteln. Es handelt sich dabei um einen Soll-Ist-Vergleich zwischen den Sicherheitsanforderungen gemäß IT-Grundschutz und den tatsächlich umgesetzten Sicherheitsmaßnahmen. Durch den IT-Grundschutz-Check können Schwachstellen identifiziert und verbesserte Sicherheitsmaßnahmen implementiert werden."
},{
    id: 20,
    question: "Welche Vorarbeiten erfordert der IT-Grundschutz-Check?",
    choices: [
        "die Festlegung eines Zeitplans ",
        "die Auswahl von geeigneten Gesprächspartnern ",
        "einen Penetrationstest, um Schwachstellen zu identifizieren, die mit den ausgewählten Gesprächspartnern erörtert werden",
        "die Zusammenstellung und Lektüre der vorhandenen Dokumente zur Informationssicherheit in dem betrachteten Informationsverbund "
    ],
    correctAnswers: [1, 2, 4], // Correct answers are options number 1, 2, and 4 (starting from 1)
    explanation: "Vor dem IT-Grundschutz-Check sollten ein Zeitplan festgelegt, geeignete Gesprächspartner ausgewählt und vorhandene Dokumente zur Informationssicherheit im betrachteten Informationsverbund zusammengetragen und studiert werden. Diese Vorarbeiten sind notwendig, um den Check effektiv durchführen und Schwachstellen identifizieren zu können."
},{
    id: 21,
    question: "Welche Verfahren verwenden Sie, um in einem IT-Grundschutz-Check zu prüfen, wie gut eine Gruppe von Clients geschützt ist?",
    choices: [
        "Sie führen Interviews mit den zuständigen Systembetreuern.",
        "Sie versuchen in einem Penetrationstest, Schwachstellen dieser IT-Systeme zu ermitteln, und beziehen dabei sämtliche zur Gruppe gehörenden Clients ein.",
        "Sie untersuchen stichprobenartig vor Ort, wie die Clients konfiguriert sind.",
        "Sie lesen die vorhandene Dokumentation zur Konfiguration der Clients."
    ],
    correctAnswers: [1, 3, 4], // Correct answers are options number 1, 3, and 4 (starting from 1)
    explanation: "Um die Sicherheit einer Gruppe von Clients zu prüfen, können verschiedene Verfahren angewendet werden. Dies beinhaltet Interviews mit den zuständigen Systembetreuern, stichprobenartige Vor-Ort-Untersuchungen, um die Konfiguration der Clients zu überprüfen, sowie das Studium der vorhandenen Dokumentation zur Konfiguration der Clients. Ein Penetrationstest kann ebenfalls durchgeführt werden, um Schwachstellen zu ermitteln, jedoch sind die anderen genannten Verfahren ebenfalls wichtige Bestandteile einer umfassenden Sicherheitsprüfung."
},{
    id: 22,
    question: "Wann bewerten Sie beim IT-Grundschutz-Check eine Anforderung eines IT-Grundschutz-Bausteins als erfüllt?",
    choices: [
        "wenn zu der Anforderung geeignete Maßnahmen vollständig, wirksam und angemessen umgesetzt sind ",
        "wenn der Gesprächspartner Ihnen glaubhaft versichert hat, dass es bislang zu keinen Sicherheitsproblemen auf dem betreffenden IT-System gekommen ist",
        "wenn es eine umfangreiche Dokumentation zu den Schutzvorkehrungen für das betreffende IT-System gibt",
        "wenn sowohl im Interview mit einem für das IT-System Zuständigen als auch bei einer stichprobenartigen Überprüfung keine Sicherheitsmängel festgestellt wurden "
    ],
    correctAnswers: [1, 4], // Correct answers are options number 1 and 4 (starting from 1)
    explanation: "Eine Anforderung eines IT-Grundschutz-Bausteins wird als erfüllt bewertet, wenn zu der Anforderung geeignete Maßnahmen vollständig, wirksam und angemessen umgesetzt sind. Zudem wird die Erfüllung durch Interviews mit zuständigen Personen und stichprobenartige Überprüfungen auf Sicherheitsmängel bewertet. Eine glaubhafte Versicherung ohne Überprüfung oder eine umfangreiche Dokumentation allein sind nicht ausreichend für die Bewertung der Erfüllung einer Anforderung."
},{
    id: 23,
    question: "Wie verfahren Sie beim ersten IT-Grundschutz-Check, also vor der Durchführung von Risikoanalysen, mit Anforderungen für den erhöhten Schutzbedarf?",
    choices: [
        "Sie stufen diese Anforderungen grundsätzlich als entbehrlich ein und verzichten auch dann darauf, diese zu überprüfen, wenn sie in Ihrer Einrichtung umgesetzt sind.",
        "Sie streichen die Anforderungen aus Ihrem Sollkonzept.",
        "Sie betrachten Anforderungen für den hohen und sehr hohen Schutzbedarf erst nach Abschluss der Risikoanalyse. ",
        "Sie betrachten im IT-Grundschutz-Check grundsätzlich alle in den IT-Grundschutz-Bausteinen genannten Anforderungen, folglich auch diejenigen für den erhöhten Schutzbedarf."
    ],
    correctAnswers: [3], // Correct answer is option number 3 (starting from 1)
    explanation: "Beim ersten IT-Grundschutz-Check, also vor der Durchführung von Risikoanalysen, werden Anforderungen für den erhöhten Schutzbedarf noch nicht berücksichtigt. Diese Anforderungen für den hohen und sehr hohen Schutzbedarf werden erst nach Abschluss der Risikoanalyse betrachtet und bewertet. Im ersten IT-Grundschutz-Check werden grundlegend alle in den IT-Grundschutz-Bausteinen genannten Anforderungen geprüft, jedoch noch nicht diejenigen, die einen erhöhten Schutzbedarf betreffen."
},{
    id: 24,
    question: "Sie stellen fest, dass eine Standard-Anforderung für ein IT-System nicht umgesetzt ist, das nur noch kurze Zeit in Betrieb ist. Wie behandeln Sie diese Anforderung beim IT-Grundschutz-Check?",
    choices: [
        "Sie streichen die Anforderung aus dem IT-Grundschutz-Modell.",
        "Sie dokumentieren diese als entbehrlich, da ihre Umsetzung nicht mehr wirtschaftlich ist.",
        "Sie dokumentieren diese als nicht erfüllt, und merken gegebenenfalls an, dass geprüft werden muss, ob Maßnahmen zur Behebung dieses Defizits angesichts der kurzen Einsatzzeit des IT-Systems noch angemessen sind. ",
        "Sie dokumentieren diese als nicht erfüllt und merken an, dass geprüft werden muss, ob die daraus resultierenden Risiken in der Restlaufzeit des IT-Systems noch tragbar sind. "
    ],
    correctAnswers: [3, 4], // Correct answers are options number 3 and 4 (starting from 1)
    explanation: "Wenn eine Standard-Anforderung für ein IT-System nicht umgesetzt ist und das System nur noch kurze Zeit in Betrieb ist, wird diese Anforderung als nicht erfüllt dokumentiert. Es wird dann geprüft, ob Maßnahmen zur Behebung des Defizits angesichts der kurzen Einsatzzeit des IT-Systems noch angemessen sind. Falls die daraus resultierenden Risiken in der Restlaufzeit des IT-Systems nicht mehr tragbar sind, müssen entsprechende Maßnahmen ergriffen werden, um die Risiken zu minimieren."
},{
  id: 25,
  question: "Wer trägt die Verantwortung für die bei einer Risikoanalyse getroffenen Entscheidungen zu einem IT-System?",
  choices: [
    "der Administrator des IT-Systems",
    "die Leitung der Institution [richtig]",
    "der Informationssicherheitsbeauftragte",
    "das IS-Management-Team"
  ],
  correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
  explanation: "Bei einer Risikoanalyse trägt die Leitung der Institution die Verantwortung für die getroffenen Entscheidungen zu einem IT-System. Die Leitung ist dafür verantwortlich, angemessene Schutzmaßnahmen zu definieren und umzusetzen, um die Sicherheit des IT-Systems zu gewährleisten."
},{
  id: 26,
  question: "Welche Gefährdungen werden bei der Erstellung der Gefährdungsübersicht im ersten Schritt betrachtet?",
  choices: [
    "die im Anhang von BSI-Standard 200-3 enthaltenen Risikokataloge",
    "die relevanten elementaren Gefährdungen aus dem IT-Grundschutz-Kompendium [richtig]",
    "die im Anhang der Norm ISO 27005 angeführten Gefährdungen",
    "die in den Abschnitten zur Gefährdungslage eines Bausteins angeführten spezifischen Gefährdungen"
  ],
  correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
  explanation: "Bei der Erstellung der Gefährdungsübersicht im ersten Schritt werden die relevanten elementaren Gefährdungen aus dem IT-Grundschutz-Kompendium betrachtet. Diese Gefährdungen bilden die Grundlage für die weitere Risikoanalyse und Maßnahmenplanung."
},{
  id: 27,
  question: "Was bewerten Sie bei der Risikoeinschätzung?",
  choices: [
    "die Häufigkeit des Eintretens einer Gefährdung [richtig]",
    "das mit einer Gefährdung verbundene Schadensausmaß [richtig]",
    "welche Schutzziele von einer Gefährdung betroffen sind",
    "die Wirksamkeit der geplanten und umgesetzten Maßnahmen gegen eine Gefährdung"
  ],
  correctAnswers: [1, 2], // Correct answers are options number 1 and 2 (starting from 1)
  explanation: "Bei der Risikoeinschätzung werden die Häufigkeit des Eintretens einer Gefährdung und das mit dieser Gefährdung verbundene Schadensausmaß bewertet. Diese Bewertung bildet die Grundlage für die Bestimmung des Risikos und die Festlegung geeigneter Schutzmaßnahmen."
},{
  id: 28,
  question: "Wodurch verlagern Sie ein Risiko?",
  choices: [
    "durch den Abschluss einer Versicherung [richtig]",
    "durch Outsourcing des risikobehafteten Geschäftsprozesses an einen externen Dienstleister [richtig]",
    "durch Umstrukturierung des risikobehafteten Geschäftsprozesses",
    "durch die Entscheidung, risikomindernde Maßnahmen erst dann umzusetzen, wenn die hierzu erforderlichen Finanzmittel bereitstehen"
  ],
  correctAnswers: [1, 2], // Correct answers are options number 1 and 2 (starting from 1)
  explanation: "Ein Risiko kann durch den Abschluss einer Versicherung oder durch Outsourcing des risikobehafteten Geschäftsprozesses an einen externen Dienstleister verlagert werden. Diese Maßnahmen reduzieren die direkte Verantwortung und finanzielle Belastung für das betroffene Unternehmen im Falle eines Schadensereignisses."
},{
  id: 29,
  question: "Aus welchen Gründen kann es gerechtfertigt sein, auch ein hohes Risiko zu akzeptieren?",
  choices: [
    "Der Aufwand für mögliche Schutzmaßnahmen ist unangemessen hoch. [richtig]",
    "Vergleichbare Institutionen akzeptieren das Risiko ebenfalls.",
    "Es gibt keine wirksamen Schutzmaßnahmen gegen das Risiko. [richtig]",
    "Es ist bislang noch zu keinem nennenswerten Sicherheitsvorfall aufgrund der dem Risiko zugrunde liegenden Gefährdung gekommen."
  ],
  correctAnswers: [1, 3], // Correct answers are options number 1 and 3 (starting from 1)
  explanation: "Es kann gerechtfertigt sein, ein hohes Risiko zu akzeptieren, wenn der Aufwand für mögliche Schutzmaßnahmen unangemessen hoch ist oder wenn es keine wirksamen Schutzmaßnahmen gegen das Risiko gibt. In solchen Fällen kann die Organisation entscheiden, das Risiko zu akzeptieren. Die Entscheidung zur Risikoakzeptanz sollte jedoch gut dokumentiert und begründet werden."
},{
  id: 30,
  question: "Wann ist die Risikoakzeptanz grundsätzlich unzulässig?",
  choices: [
    "bei der Nichterfüllung von Basis-Anforderungen [richtig]",
    "beim Vorhandensein von elementaren Gefährdungen",
    "bei sehr hohem Schutzbedarf",
    "bei Nichterfüllung von Standard-Anforderungen"
  ],
  correctAnswers: [1], // Correct answer is option number 1 (starting from 1)
  explanation: "Die Risikoakzeptanz ist grundsätzlich unzulässig, wenn Basis-Anforderungen nicht erfüllt werden. Basis-Anforderungen sind essentielle Sicherheitsmaßnahmen, die unabhängig von spezifischen Gefährdungen gelten und gewährleisten, dass ein Mindestmaß an Sicherheit vorhanden ist. Die Nichterfüllung von Basis-Anforderungen stellt ein zu hohes Risiko dar und sollte nicht akzeptiert werden."
},{
  id: 31,
  question: "Was müssen Sie prüfen, wenn Sie die Umsetzung von Sicherheitsmaßnahmen planen?",
  choices: [
    "welche begleitenden Maßnahmen für eine erfolgreiche Umsetzung erforderlich sind [richtig]",
    "ob die betreffende Maßnahme bereits eingeführt ist",
    "ob die Maßnahme mit anderen Maßnahmen vereinbar ist [richtig]",
    "in welcher Reihenfolge die verschiedenen Maßnahmen umgesetzt werden sollen [richtig]"
  ],
  correctAnswers: [1, 3, 4], // Correct answers are options number 1, 3, and 4 (starting from 1)
  explanation: "Bei der Planung der Umsetzung von Sicherheitsmaßnahmen müssen verschiedene Aspekte geprüft werden. Es ist wichtig zu überlegen, welche begleitenden Maßnahmen für eine erfolgreiche Umsetzung erforderlich sind. Zudem muss geprüft werden, ob die Maßnahme mit anderen Maßnahmen vereinbar ist, um Inkonsistenzen zu vermeiden. Auch die Reihenfolge, in der die verschiedenen Maßnahmen umgesetzt werden sollen, sollte sorgfältig geplant werden, um einen effizienten und effektiven Sicherheitsprozess sicherzustellen."
},{
  id: 32,
  question: "Welche Informationen aus dem IT-Grundschutz-Kompendium unterstützen Sie bei der Festlegung einer sinnvollen Umsetzungsreihenfolge der geplanten Maßnahmen?",
  choices: [
    "die fünfstufige Kennziffer zur Angabe der Priorität einer Anforderung in den IT-Grundschutz-Bausteinen",
    "die Aufteilung der Anforderungen in Basis- und Standard-Anforderungen sowie solchen für den höheren Schutzbedarf [richtig]",
    "der Vorschlag zur Kennzeichnung einer sinnvollen Bearbeitungsreihenfolge der Bausteine mithilfe der Kürzel R1, R2 und R3 [richtig]",
    "die Darstellung der Gefährdungslage am Beginn eines Bausteins"
  ],
  correctAnswers: [2, 3], // Correct answers are options number 2 and 3 (starting from 1)
  explanation: "Bei der Festlegung einer sinnvollen Umsetzungsreihenfolge der geplanten Maßnahmen im IT-Grundschutz werden verschiedene Informationen aus dem IT-Grundschutz-Kompendium herangezogen. Die Aufteilung der Anforderungen in Basis- und Standard-Anforderungen sowie solchen für den höheren Schutzbedarf ist eine wichtige Grundlage. Zusätzlich wird der Vorschlag zur Kennzeichnung einer sinnvollen Bearbeitungsreihenfolge der Bausteine mithilfe der Kürzel R1, R2 und R3 als Orientierungshilfe verwendet."
},
{
  id: 33,
  question: "Was unternehmen Sie als Informationssicherheitsbeauftragter, wenn die Leitung Ihrer Institution nicht bereit ist, den Aufwand für eine bestimmte Sicherheitsmaßnahme zu tragen?",
  choices: [
    "Sie verdeutlichen ihr, welche Risiken mit dem Fehlen der Maßnahme verbunden sind. [richtig]",
    "Sie bitten die Leitung, durch Unterschrift zu bestätigen, dass sie die damit verbundenen Gefahren kennt und trägt. [richtig]",
    "Sie ignorieren die Leitung und setzen die Maßnahme trotzdem um.",
    "Sie verzichten auf eine unmittelbare Reaktion, nehmen sich aber vor, nach Ablauf einer gewissen Zeitspanne die Zustimmung der Leitung einzuholen."
  ],
  correctAnswers: [1, 2], // Correct answers are options number 1 and 2 (starting from 1)
  explanation: "Als Informationssicherheitsbeauftragter ist es Ihre Verantwortung, die Leitung über die Risiken zu informieren, die mit dem Fehlen einer bestimmten Sicherheitsmaßnahme verbunden sind. Sie sollten die Leitung deutlich darauf hinweisen und sie bitten, durch Unterschrift zu bestätigen, dass sie die damit verbundenen Gefahren kennt und trägt. Ignorieren der Leitung oder eigenmächtiges Handeln ohne Zustimmung ist nicht empfohlen."
},{
  id: 34,
  question: "Wer sollte in der Regel technische Maßnahmen zur Absicherung eines bestimmten IT-Systems umsetzen?",
  choices: [
    "die Leitung der IT-Abteilung",
    "der Informationssicherheitsbeauftragte",
    "der zuständige Systemadministrator [richtig]",
    "der Benutzer des IT-Systems"
  ],
  correctAnswers: [3], // Correct answer is option number 3 (starting from 1)
  explanation: "In der Regel ist der zuständige Systemadministrator für die Umsetzung technischer Maßnahmen zur Absicherung eines bestimmten IT-Systems verantwortlich. Der Systemadministrator verfügt über das technische Wissen und die Expertise, um die erforderlichen Maßnahmen effektiv umzusetzen."
},{
  id: 35,
  question: "Wer sollte üblicherweise prüfen, ob eine Sicherheitsmaßnahme wie geplant umgesetzt ist?",
  choices: [
    "die Geschäftsführung",
    "der Informationssicherheitsbeauftragte [richtig]",
    "der zuständige IT-Administrator",
    "die Leitung der IT-Abteilung"
  ],
  correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
  explanation: "Der Informationssicherheitsbeauftragte sollte üblicherweise prüfen, ob eine Sicherheitsmaßnahme wie geplant umgesetzt ist. Diese Prüfung ist Teil seiner Verantwortlichkeiten im Rahmen des Informationssicherheitsmanagements."
},{
  id: 36,
  question: "Welches Hilfsmittel im IT-Grundschutz-Kompendium können Sie verwenden, um Ihrer Leitung zu verdeutlichen, welche Risiken die Nichterfüllung von Anforderungen mit sich bringt?",
  choices: [
    "das Restrisikodeklarationsformular im Anhang des Kompendiums",
    "die Kreuzreferenztabellen am Ende eines Bausteins [richtig]",
    "das Risikokalkulationsschema in der Übersicht der elementaren Gefährdungen",
    "die Beispiele für eine erfolgreiche Sensibilisierung im Baustein ORP.3 Sensibilisierung und Schulung"
  ],
  correctAnswers: [2], // Correct answer is option number 2 (starting from 1)
  explanation: "Um der Leitung zu verdeutlichen, welche Risiken die Nichterfüllung von Anforderungen mit sich bringt, können Sie die Kreuzreferenztabellen am Ende eines Bausteins im IT-Grundschutz-Kompendium verwenden. Diese Tabellen bieten einen Überblick über die Zusammenhänge zwischen den Anforderungen und den entsprechenden Gefährdungen, Schutzzielen und Maßnahmen."
}
];

const showExplanationBtn = document.getElementById("showExplanationBtn");
const explanationDiv = document.getElementById("explanation");
const questionDiv = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const percentageDiv = document.getElementById("showPercentage");
let selectedChoices = [];

function getRandomVariant(variants) {
    const randomNumber = Math.floor(Math.random() * variants.length);
    return variants[randomNumber];
}

function showPercentage(){
    const qData = `Fragen beantwortet: ${answeredQuestions}<br>Erfolgsprozent: ${correctPercentage}%`;
    document.getElementById('showPercentage').innerHTML = qData;
}

showExplanationBtn.addEventListener("click", function () {
    const currentQuestion = questionData[currentQuestionIndex];
    explanationDiv.textContent = currentQuestion.explanation;
    explanationDiv.classList.remove("d-none");
    explanationDiv.scrollIntoView({ behavior: 'smooth' });
});

function displayQuestion(question) {
    questionDiv.textContent = question.question;
    choicesDiv.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert", "alert-secondary", "mt-3");
        alertBox.textContent = choice;
        alertBox.setAttribute("data-index", index + 1);
        alertBox.addEventListener("click", handleChoiceClick);
        choicesDiv.appendChild(alertBox);
    });
}

function handleChoiceClick(event) {
    const clickedIndex = parseInt(event.target.getAttribute("data-index"));
    const index = selectedChoices.indexOf(clickedIndex);
    if (index === -1) {
        selectedChoices.push(clickedIndex);
        event.target.classList.remove("alert-secondary");
        event.target.classList.add("alert-primary");
    } else {
        selectedChoices.splice(index, 1);
        event.target.classList.remove("alert-primary");
        event.target.classList.add("alert-secondary");
    }
}

function checkAnswers(userAnswers, correctAnswers) {
    return userAnswers.length === correctAnswers.length && userAnswers.every(answer => correctAnswers.includes(answer));
}

function displayResult(correct) {
    choicesDiv.childNodes.forEach((choice, index) => {
        if (selectedChoices.includes(index + 1)) {
            const isCorrect = questionData[currentQuestionIndex].correctAnswers.includes(index + 1);
            choice.classList.remove("alert-primary");
            choice.classList.remove("alert-danger");
            choice.classList.add(isCorrect ? "alert-success" : "alert-danger");

        }
    });

    if (correct) {
        const correctVariants = [
    "Richtig, du kennst dich aus in Schutzbedarfanalyse!",
    "Gut gemacht, du verstehst das in Schutzbedarfanalyse!",
    "Korrekt, du bist wirklich fit in Schutzbedarfanalyse!",
    "Genau, du beherrschst das Thema in Schutzbedarfanalyse!",
    "Perfekt, du bist ein Profi in Schutzbedarfanalyse!",
    "Exakt, du hast ein gutes Verständnis für Schutzbedarfanalyse!",
    "Bravo, du zeigst dein Können in Schutzbedarfanalyse!",
    "Stimmt, du bist echt stark in Schutzbedarfanalyse!",
    "Fantastisch, du hast es im Griff in Schutzbedarfanalyse!",
    "Absolut richtig, du bist ein Schutzbedarfanalyse-Experte!"
];
        const randomCorrctResult = getRandomVariant(correctVariants);
        resultDiv.textContent = randomCorrctResult;
        resultDiv.classList.add("text-success");
        userCorrectAnswers++;
        answeredQuestions++;
        correctPercentage = Math.round((userCorrectAnswers/answeredQuestions) * 100);
        //updateCookie(answeredQuestions, correctPercentage);
        showPercentage();
        console.log("correctAnswers: ", correctPercentage , " - answeredQuestions: ", answeredQuestions);
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
      const wrongVariants = ["Schade, das ist nicht korrekt! Netflix ist unterhaltsam, aber für Schutzbedarfanalyse musst du anderswo suchen.",
    "Falsch! Netflix bietet Unterhaltung, aber für Schutzbedarfanalyse-Wissen gibt es bessere Quellen.",
    "Das ist leider nicht richtig! Wende dich an zuverlässige Quellen für dein Schutzbedarfanalyse-Wissen, nicht an Netflix.",
    "Leider falsch! Netflix ist großartig für Filme, aber nicht für Schutzbedarfanalyse-Inhalte.",
    "Das war nicht die richtige Wahl. Netflix ist keine verlässliche Quelle für Schutzbedarfanalyse-Wissen.",
    "Nicht ganz! Für Schutzbedarfanalyse gibt es spezifische Lernmaterialien, Netflix ist nicht eine davon.",
    "Falsch! Netflix bietet Unterhaltung, aber für dein Schutzbedarfanalyse-Wissen solltest du andere Quellen nutzen.",
    "Das ist nicht korrekt! Schutzbedarfanalyse-Inhalte findest du woanders, nicht auf Netflix.",
    "Leider falsch! Netflix ist keine Plattform für schulische Inhalte wie Schutzbedarfanalyse.",
    "Das ist nicht die richtige Antwort. Netflix ist keine Wissensdatenbank für schulische Themen wie Schutzbedarfanalyse.",
    "Oops, das ist nicht korrekt! Tennis ist ein großartiger Sport, aber für Schutzbedarfanalyse musst du andere Quellen aufsuchen.",
    "Falsch! Tennis ist sportlich, aber für Schutzbedarfanalyse-Wissen gibt es bessere Ressourcen.",
    "Das ist leider nicht richtig! Wende dich an zuverlässige Quellen für dein Schutzbedarfanalyse-Wissen, nicht an Tennisplätze.",
    "Leider falsch! Tennis ist großartig für Bewegung, aber nicht für Schutzbedarfanalyse-Inhalte.",
    "Das war nicht die richtige Wahl. Tennisplätze sind keine verlässliche Quelle für Schutzbedarfanalyse-Wissen.",
    "Nicht ganz! Für Schutzbedarfanalyse gibt es spezifische Lernmaterialien, Tennisplätze gehören nicht dazu.",
    "Falsch! Tennis ist eine sportliche Aktivität, aber für dein Schutzbedarfanalyse-Wissen solltest du andere Quellen nutzen.",
    "Das ist nicht korrekt! Schutzbedarfanalyse-Inhalte findest du woanders, nicht auf dem Tennisplatz.",
    "Leider falsch! Tennisplätze sind keine Plattform für schulische Inhalte wie Schutzbedarfanalyse.",
    "Das ist nicht die richtige Antwort. Tennisplätze sind keine Wissensdatenbank für schulische Themen wie Schutzbedarfanalyse.",
    "Schade, das ist nicht korrekt! Fußball ist spannend, aber für Schutzbedarfanalyse musst du andere Quellen aufsuchen.",
    "Falsch! Fußball ist beliebt, aber für Schutzbedarfanalyse-Wissen gibt es bessere Ressourcen.",
    "Das ist leider nicht richtig! Wende dich an zuverlässige Quellen für dein Schutzbedarfanalyse-Wissen, nicht an Fußballspiele.",
    "Leider falsch! Fußball ist großartig für Fans, aber nicht für Schutzbedarfanalyse-Inhalte.",
    "Das war nicht die richtige Wahl. Fußballspiele sind keine verlässliche Quelle für Schutzbedarfanalyse-Wissen.",
    "Nicht ganz! Für Schutzbedarfanalyse gibt es spezifische Lernmaterialien, Fußballspiele gehören nicht dazu.",
    "Falsch! Fußball ist eine beliebte Sportart, aber für dein Schutzbedarfanalyse-Wissen solltest du andere Quellen nutzen.",
    "Das ist nicht korrekt! Schutzbedarfanalyse-Inhalte findest du woanders, nicht auf dem Fußballplatz.",
    "Leider falsch! Fußballspiele sind keine Plattform für schulische Inhalte wie Schutzbedarfanalyse.",
    "Das ist nicht die richtige Antwort. Fußballspiele sind keine Wissensdatenbank für schulische Themen wie Schutzbedarfanalyse."
      ];
        const randomWrongResult = getRandomVariant(wrongVariants);
        resultDiv.textContent = randomWrongResult;
        resultDiv.classList.add("text-danger");
        answeredQuestions++;
        correctPercentage = Math.round((userCorrectAnswers/answeredQuestions) * 100);
        showPercentage();
        //updateCookie(answeredQuestions, correctPercentage);
        console.log("answeredQuestions: ", answeredQuestions);
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

let currentQuestionIndex;

function displayRandomQuestion() {
    // Reset explanationDiv content to an empty string
    explanationDiv.textContent = "";

    if (questionData.length === 0) {
        questionDiv.textContent = "No more questions available.";
        choicesDiv.innerHTML = "";
        submitBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    currentQuestionIndex = Math.floor(Math.random() * questionData.length);
    const currentQuestion = questionData[currentQuestionIndex];
    selectedChoices = [];

    displayQuestion(currentQuestion);
    submitBtn.disabled = false;
    nextBtn.disabled = true;
    resultDiv.textContent = "";
    resultDiv.classList.remove("text-success", "text-danger");
    questionDiv.scrollIntoView({ behavior: 'smooth' });
}

submitBtn.addEventListener("click", function () {
    console.log("answered");
    const currentQuestion = questionData[currentQuestionIndex];
    const correct = checkAnswers(selectedChoices, currentQuestion.correctAnswers);
    displayResult(correct);
    submitBtn.disabled = true;
    nextBtn.disabled = false;
    //displayCookieData();
});

nextBtn.addEventListener("click", displayRandomQuestion);

// Initial display of a random question
displayRandomQuestion();
