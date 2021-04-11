<template>
  <div id="wrapper">
    <!--INNER BANNER START-->
    <InnerBanner :title="'contact_us'" />
    <!--INNER BANNER END-->
    <div id="main">
      <!--CONTACT PAGE START-->
      <section
        class="contact-page"
        :class="{ 'contact-page-right-to-left': isRightToLeft }"
      >
        <div class="contact-infor-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="address-box">
                  <em>{{ $t("contact.office") }}</em>
                  <h3>{{ $t("contact.getInTune") }}</h3>
                  <p>{{ $t("contact.contactText") }}</p>
                  <ul>
                    <!-- <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>1 (800)
                      987-0235
                    </li> -->
                    <li>
                      <i
                        class="fa fa-envelope-o"
                        :class="{
                          'fa-envelope-o-right-to-left': isRightToLeft
                        }"
                        aria-hidden="true"
                        >badgusan@gmail.com</i
                      >
                      <div></div>
                    </li>
                    <!-- <li>
                      <i class="fa fa-map-o" aria-hidden="true"></i>40 Baria
                      Sreet 133/2 NewYork City, US
                    </li> -->
                  </ul>
                </div>
              </div>
              <!-- <div class="col-md-8 col-sm-8">
                <div class="contact-form">
                  <form action="#">
                    <div class="row">
                      <div class="col-md-6">
                        <input required type="text" placeholder="Name :" />
                      </div>
                      <div class="col-md-6">
                        <input required type="text" placeholder="Email:" />
                      </div>
                      <div class="col-md-12">
                        <textarea
                          required
                          cols="10"
                          rows="10"
                          placeholder="Message:"
                        ></textarea>
                      </div>
                      <div class="btn-row">
                        <input type="submit" value="Send" />
                      </div>
                    </div>
                  </form>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <!--CONTACT PAGE END-->
    </div>
  </div>
</template>

<script>
import InnerBanner from "@/components/InnerBanner";

export default {
  components: {
    InnerBanner: InnerBanner
  },
  data() {
    return {
      isRightToLeft: this.$store.getters.isRightToLeft
    };
  }
};
</script>

<style>
.contact-page-right-to-left {
  direction: rtl;
  text-align: right;
}

.fa-envelope-o-right-to-left {
  right: 0;
}
</style>
