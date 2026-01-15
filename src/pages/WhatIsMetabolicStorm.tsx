import { Header } from '@/components/ui/header-3';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

const articleContent = `**מהי סערה מטבולית?**

סערה מטבולית היא רעיון שנולד מתוך שאלה פשוטה:  
האם לחולי סרטן יש מפת דרכים?

המציאות היא שמערכת הבריאות המודרנית מציעה טיפולים מתקדמים, אך כמעט לא נותנת **מצפן דרך**:  
 איך להבין את המחלה, מהן השאלות הנכונות שצריך לשאול, ואיך להשתמש בזמן, בגוף ובידע – כדי לשפר סיכויי הישרדות ולא רק "להמתין לטיפול הבא".

הקונספט של סערה מטבולית יוצא מנקודת מוצא שונה:  
 סרטן הוא לא רק גידול מקומי, אלא תהליך מערכתי – מטבולי, חיסוני, הורמונלי והתנהגותי – שפועל בכל הגוף.  
 לכן, ההתמודדות איתו לא יכולה להישען רק על כלי אחד (כימותרפיה / הקרנות / אימונותרפיה), אלא על שילוב חכם של כמה שכבות.

הפלטפורמה מאגדת ידע וכלים משלימים – חלקם קטנים, חלקם משמעותיים – שיכולים, יחד, לשפר את התנאים שבהם הטיפול הרפואי פועל:  
 תזונה ומטבוליזם, שינה, פעילות גופנית, סטרס, חום וקור, תוספים, תזמון טיפולים, והשתתפות ביולוגית .  
 **לא כתחליף לרפואה – אלא כתשתית שמאפשרת לה לעבוד טוב יותר.**

המטרה של סערה מטבולית אינה להבטיח ריפוי, אלא לתת לחולה יכולת חשיבה, הבנה ושליטה בתוך כאוס, לתת מצפן בניווט המורכב הזה, ולהציע כלים שמוכחים כמשפרי יעילות של טיפולים מרכזיים (וכן- יש כאלה).  
 במקום להיות פסיבי בתוך מערכת – החולה הופך לשותף מודע, שמבין מה קורה בגופו, מה ניתן להשפיע עליו, ואיפה עובר הקו בין מדע, ניסוי וזהירות.

להם גישה אחת וישירה למחלה, להבין שקיימת גם חשיבה רחבה יותר, כיווני פעולה משלימים ושאלות שכדאי לשאול. מבחינתי, חולי הסרטן שנמצאים בשטח כבר לא חסרי כיוון – אבל חסר להם מצפן, או מעין מפת דרכים שמאגדת את הדברים בצורה אחראית, לא מתיימרת, שלא אומר "מה לעשות", אלא מסייע להם ולרופאים לנהל שיח אחר, עמוק יותר, שמבין את המורכבות של המחלה.

זהו מודל חשיבה:  
 **לא פתרון קסם, אלא מפת דרכים.** מה שאני מבקש להבהיר הוא שהמטרה של המסמך אינה לתת לחולה הוראות טיפוליות או לייעץ רפואית, אלא לשמש כמצפן מחשבתי וכלי מסדר: הוא נועד לאפשר לחולים שמגיעים אליו אחרי שכבר שמעו מהרופאים שיש`;

const WhatIsMetabolicStorm = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      {/* Hero Section with Full Screen Image */}
      <section className="relative h-screen w-full">
        <img 
          src="/what-is-metabolic-storm/main-image.png" 
          alt="מהי סערה מטבולית"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Title at the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-16 md:pb-24 lg:pb-32">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              מהי סערה מטבולית?
            </h1>
            <p className="text-white/70 text-lg md:text-xl">
              ינואר 2025
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background py-20 md:py-32">
        <article className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-foreground/85 text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            <ReactMarkdown
              components={{
                p: ({ children }) => {
                  // Skip the first paragraph which is just the title
                  const text = String(children);
                  if (text.includes('מהי סערה מטבולית?') && text.length < 30) {
                    return null;
                  }
                  return <p className="mb-10">{children}</p>;
                },
                strong: ({ children }) => <strong className="text-foreground font-semibold">{children}</strong>,
              }}
            >
              {articleContent}
            </ReactMarkdown>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsMetabolicStorm;
