<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", async function () {
      const viewCountElement = document.getElementById("pageViews");

      // ✅ Firebase Configuration
      const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "blogpost-dd74b.firebaseapp.com",
          projectId: "blogpost-dd74b",
          storageBucket: "blogpost-dd74b.appspot.com",
          messagingSenderId: "1095125368505",
          appId: "1:1095125368505:web:f4393a968af5ccf6dee568",
          measurementId: "G-BRMHGFJBKN"
      };

      // ✅ Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
      
      // ✅ Reference the correct document
      const pageRef = db.collection("pageViews").doc("blogpost");

      try {
          const doc = await pageRef.get();
          if (doc.exists) {
              console.log("Updating Firestore...");
              await pageRef.update({ count: firebase.firestore.FieldValue.increment(1) });
          } else {
              console.log("Creating new document...");
              await pageRef.set({ count: 1 });
          }
          const updatedDoc = await pageRef.get();
          viewCountElement.innerText = updatedDoc.data().count;
          console.log("Page view updated:", updatedDoc.data().count);
      } catch (error) {
          console.error("🔥 Error updating Firestore:", error);
          viewCountElement.innerText = "Error!";
      }
  });
</script>

