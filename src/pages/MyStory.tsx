import { Header } from '@/components/ui/header-3';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
const articleContent = `### **מי אני — יואב שריקר**

היי! אז אני יואב שריקר, אני בן 21. הסיפור שלי עם המחלה לא התחיל בעולם המחקר או האקדמיה — הוא התחיל בצבא.
בצבא שירתתי ביחידת יהל"ם, נלחמתי 3 חודשים בעזה, ולאחר קרוב לשנה וחצי של שירות צבאי, קמתי בוקר אחד ביחידה שבו הכל השתנה.
גוש בצד ימין של הלשון, שנחשד בהתחלה כאפטה, ובהמשך התברר (לאחר ביופסיה) שמדובר בסרטן.

לאחר שאובחנתי בסרטן וצלחתי ניתוח ו־6 שבועות של קרינה — מצבי הפיזי הפך לנקודת ההתחלה של מסע חדש. יום אחרי סיום הטיפול רצתי 60 ק״מ, פעולה שהמטרה שלה הייתה אחת: להראות הגבול האנושי רחוק שנות אור ממה שאנחנו חושבים.

המחלה שלחה אותי לשאול שאלות, לחקור, לחפש תשובות, ולהבין- האם האדם הממוצע שחולה בסרטן באמת מבין מה הוא צריך לעשות מהיום הראשון? האם אפשר לעשות דברים אחרת? לצד המחקר אני בונה את הדור הבא של תכנים מדעיים־ויזואליים: הרצאות, מסמכים, מאגרי ידע וכיווני טיפול אפשריים, בשפה נגישה שאינה מחליפה רפואה — אלא מחזקת אותה.

סערה מטבולית היא לא רק מדע. היא גם תנועה של עשייה: ריצות־על, שחייה במים קפואים, פרויקטים חינוכיים, פיתוח תודעה, ופיתוח כלים פרקטיים לאנשים שמתמודדים עם אתגרים פיזיים ונפשיים.

החזון שלי פשוט:
לשנות את האופן שבו אנחנו מבינים סרטן, את הכוח האנושי, ואת מה שאפשר לעשות בזמן משבר. להנגיש אמת מדעית, להציג חלופות, ולהחזיר לאנשים תחושת שליטה — דרך תנועה, ידע, וחוסן.

אני לא רופא ולא גורו.
אני אדם שעבר דרך, שמחפש תשובות — ויחד עם צוות של אנשים מטורפים, בוחר לברוא מציאות חדשה.`;
const MyStory = () => {
  return <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      {/* Hero Section with Full Screen Image */}
      <section className="relative h-screen w-full">
        <img src="/who-am-i/main-image.jpg" alt="הסיפור שלי" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Title at the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-16 md:pb-24 lg:pb-32">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              הסיפור שלי
            </h1>
            <p className="text-white/70 text-lg font-light md:text-3xl">16 בינואר 2026</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-background py-20 md:py-32">
        <article className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-foreground/85 text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            <ReactMarkdown components={{
            p: ({
              children
            }) => {
              const text = String(children);
              // Skip the h3 title since we have our own hero title
              if (text.includes('מי אני — יואב שריקר') && text.length < 40) {
                return null;
              }
              return <p className="mb-10 text-3xl">{children}</p>;
            },
            h3: () => null,
            // Skip h3 headings
            strong: ({
              children
            }) => <strong className="text-foreground font-semibold">{children}</strong>
          }}>
              {articleContent}
            </ReactMarkdown>
          </div>
        </article>
      </section>

      <Footer />
    </div>;
};
export default MyStory;